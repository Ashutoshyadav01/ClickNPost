import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const assetsDirectory = path.resolve("src/assets");

// Base folder that holds all the shoot category subfolders
const shootRoot = path.join(
  assetsDirectory,
  "Gautam_album_photo",
  "Shoot-2026"
);

// Add/remove folder names here to match what's actually in Shoot-2026.
// Use the exact folder names as they appear on disk (spaces and all).
const categoryFolders = [
  "Baby Shoot",
  "Baby Shower",
  "Birthday",
  "Bride Pose",
  "Candid",
  "Classic Porg",
  "Corporate Event",
  "Couple",
  "Decor",
  "Dress Shoot",
  "Groom Pose",
  "Grouping",
  "Live Photobooth",
  "Pool Party",
  "Pre-Wedding",
  "Property",
  "School Event",
  // ...add any remaining folders below School Event here
];

const validExtensions = /\.(jpg|jpeg|png|webp|avif)$/i;

const MAX_WIDTH = 1000;
const MAX_FILE_SIZE_KB = 65;

/*
 * Turns a folder name into a filename prefix using its first word.
 * "Baby Shoot" -> "baby", "Corporate Event" -> "corporate",
 * "Pre-Wedding" -> "pre", "Candid" -> "candid".
 */
function toPrefix(folderName) {
  const firstWord = folderName.trim().split(/\s+/)[0];
  return firstWord.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function compressImage(inputPath, outputPath) {
  const originalImage = sharp(inputPath).rotate();
  const metadata = await originalImage.metadata();

  let width = Math.min(metadata.width || MAX_WIDTH, MAX_WIDTH);
  let quality = 65;
  let outputBuffer;

  while (true) {
    outputBuffer = await sharp(inputPath)
      .rotate()
      .resize({
        width,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({
        quality,
        effort: 6,
        smartSubsample: true,
      })
      .toBuffer();

    const outputSizeKB = outputBuffer.length / 1024;

    if (
      outputSizeKB <= MAX_FILE_SIZE_KB ||
      (quality <= 40 && width <= 750)
    ) {
      break;
    }

    if (quality > 45) {
      quality -= 5;
    } else {
      width -= 100;
    }
  }

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await fs.writeFile(outputPath, outputBuffer);

  return outputBuffer.length;
}

async function optimizeFolder(folderName) {
  const inputFolder = path.join(shootRoot, folderName);

  /*
   * Compressed photos are saved separately first so that
   * original photographs remain safe.
   */
  const outputFolder = path.join(
    assetsDirectory,
    "compressed",
    folderName
  );

  const prefix = toPrefix(folderName);

  try {
    const entries = await fs.readdir(inputFolder, {
      withFileTypes: true,
    });

    const imageFiles = entries
      .filter(
        (entry) =>
          entry.isFile() && validExtensions.test(entry.name)
      )
      .sort((first, second) =>
        first.name.localeCompare(second.name, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      );

    let folderOriginalBytes = 0;
    let folderCompressedBytes = 0;
    let index = 1;

    for (const imageFile of imageFiles) {
      const inputPath = path.join(inputFolder, imageFile.name);
      const newFileName = `${prefix}${index}.webp`;

      const outputPath = path.join(outputFolder, newFileName);

      const originalStats = await fs.stat(inputPath);
      const compressedBytes = await compressImage(
        inputPath,
        outputPath
      );

      folderOriginalBytes += originalStats.size;
      folderCompressedBytes += compressedBytes;

      console.log(
        `${folderName}/${imageFile.name} -> ` +
          `${folderName}/${newFileName} ` +
          `(${(compressedBytes / 1024).toFixed(1)} KB)`
      );

      index++;
    }

    return {
      count: imageFiles.length,
      originalBytes: folderOriginalBytes,
      compressedBytes: folderCompressedBytes,
    };
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`Skipped: ${folderName} folder not found`);

      return {
        count: 0,
        originalBytes: 0,
        compressedBytes: 0,
      };
    }

    throw error;
  }
}

async function run() {
  let totalImages = 0;
  let totalOriginalBytes = 0;
  let totalCompressedBytes = 0;

  for (const folderName of categoryFolders) {
    const result = await optimizeFolder(folderName);

    totalImages += result.count;
    totalOriginalBytes += result.originalBytes;
    totalCompressedBytes += result.compressedBytes;
  }

  console.log("\nCompression complete");
  console.log(`Photos: ${totalImages}`);
  console.log(
    `Original: ${(totalOriginalBytes / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Compressed: ${(totalCompressedBytes / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    "\nCompressed photos are inside src/assets/compressed."
  );
}

run().catch((error) => {
  console.error("Image compression failed:", error);
  process.exitCode = 1;
});