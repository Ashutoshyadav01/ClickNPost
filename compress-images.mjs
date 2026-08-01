import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const assetsDirectory = path.resolve("src/assets");

const categoryFolders = [
  "weddings",
  "haldi",
  "maternity",
  "bridal",
  "pre-weddings",
  "engagements",
  "birthdays",
  "newborns",
  "anniversaries",
];

const validExtensions = /\.(jpg|jpeg|png|webp|avif)$/i;

const MAX_WIDTH = 1000;
const MAX_FILE_SIZE_KB = 65;

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
  const inputFolder = path.join(assetsDirectory, folderName);

  /*
   * Compressed photos are saved separately first so that
   * original photographs remain safe.
   */
  const outputFolder = path.join(
    assetsDirectory,
    "compressed",
    folderName
  );

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

    for (const imageFile of imageFiles) {
      const inputPath = path.join(inputFolder, imageFile.name);
      const fileNameWithoutExtension = path.parse(
        imageFile.name
      ).name;

      const outputPath = path.join(
        outputFolder,
        `${fileNameWithoutExtension}.webp`
      );

      const originalStats = await fs.stat(inputPath);
      const compressedBytes = await compressImage(
        inputPath,
        outputPath
      );

      folderOriginalBytes += originalStats.size;
      folderCompressedBytes += compressedBytes;

      console.log(
        `${folderName}/${imageFile.name} -> ` +
          `${(compressedBytes / 1024).toFixed(1)} KB`
      );
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