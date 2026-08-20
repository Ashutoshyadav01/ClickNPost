import React, { useEffect, useMemo, useState } from "react";
import "./Album.css";

/* =====================================================
   LOCAL PHOTO IMPORTS

   Every folder inside src/assets/compressed/ is picked up
   automatically — one glob covers all shoot categories
   (Baby Shoot, Bride Pose, Corporate Event, etc.) so this
   file doesn't need editing every time a new folder is added.
===================================================== */

const compressedPhotoModules = import.meta.glob(
  "/src/assets/compressed/*/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

/* =====================================================
   PHOTO CONFIGURATION
===================================================== */

const getFolderName = (filePath) => {
  const parts = filePath.split("/");
  const compressedIndex = parts.indexOf("compressed");
  return compressedIndex !== -1 ? parts[compressedIndex + 1] : "Other";
};

const getPhotoNumber = (filePath) => {
  const fileName = filePath.split("/").pop() || "";
  const numberMatch = fileName.match(/(\d+)(?=\.[^.]+$)/);

  return numberMatch ? Number(numberMatch[1]) : 0;
};

const localPhotos = Object.entries(compressedPhotoModules)
  .map(([path, src]) => {
    const category = getFolderName(path);
    const photoNumber = getPhotoNumber(path);

    return {
      id: `${category}-${path}`,
      src,
      path,
      number: photoNumber,
      category,
      title: `${category} Moment ${photoNumber || ""}`.trim(),
    };
  })
  .sort((firstPhoto, secondPhoto) => {
    if (firstPhoto.category !== secondPhoto.category) {
      return firstPhoto.category.localeCompare(secondPhoto.category);
    }

    return firstPhoto.number - secondPhoto.number;
  });

// Category tabs are built from whatever folders actually produced photos,
// in the order they first appear, so new shoot folders show up automatically.
const photoCategories = Array.from(
  new Set(localPhotos.map((photo) => photo.category))
);

const categories = ["All", ...photoCategories];

const Album = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") {
      return localPhotos;
    }


    return localPhotos.filter(
      (photo) => photo.category === activeCategory
    );
  }, [activeCategory]);

  const selectedPhotoIndex = selectedPhoto
    ? filteredPhotos.findIndex((photo) => photo.id === selectedPhoto.id)
    : -1;

  const closeAllViewers = () => {
    setSelectedAlbum(null);
    setSelectedPhoto(null);
  };

  const showPreviousPhoto = () => {
    if (!filteredPhotos.length || selectedPhotoIndex === -1) {
      return;
    }

    const previousIndex =
      selectedPhotoIndex === 0
        ? filteredPhotos.length - 1
        : selectedPhotoIndex - 1;

    setSelectedPhoto(filteredPhotos[previousIndex]);
  };

  const showNextPhoto = () => {
    if (!filteredPhotos.length || selectedPhotoIndex === -1) {
      return;
    }

    const nextIndex =
      selectedPhotoIndex === filteredPhotos.length - 1
        ? 0
        : selectedPhotoIndex + 1;

    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  useEffect(() => {
    const viewerIsOpen = Boolean(selectedAlbum || selectedPhoto);

    if (!viewerIsOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAllViewers();
      }

      if (selectedPhoto && event.key === "ArrowLeft") {
        showPreviousPhoto();
      }

      if (selectedPhoto && event.key === "ArrowRight") {
        showNextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedAlbum,
    selectedPhoto,
    selectedPhotoIndex,
    filteredPhotos,
  ]);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setSelectedAlbum(null);
    setSelectedPhoto(null);
  };

  const photoSectionTitle =
    activeCategory === "All"
      ? "Our Photography"
      : `${activeCategory} Photography`;

  const hasVisibleContent = filteredPhotos.length > 0;

  return (
    <div className="albumPage">
      <section className="albumHero">
        <p className="albumTag">CLICK N POST ALBUM</p>

        <h1>
          Our Beautiful <span>Stories</span>
        </h1>

        <p className="albumDescription">
          Explore our luxury wedding films, candid photography,
          pre-wedding stories, destination weddings and beautiful
          celebration albums.
        </p>
      </section>

      <section className="albumSection">
        <div className="albumTabs">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "activeTab" : ""}
              onClick={() => changeCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =========================
            LOCAL PHOTO GALLERY
        ========================= */}

        {filteredPhotos.length > 0 && (
          <div className="albumContentBlock weddingGallerySection">
            <div className="galleryHeading">
              <p>TIMELESS MEMORIES</p>

              <h2>
                {photoSectionTitle.split(" ")[0]}{" "}
                <span>
                  {photoSectionTitle.split(" ").slice(1).join(" ")}
                </span>
              </h2>

              <div className="headingLine"></div>
            </div>

            <div className="weddingPhotoGrid">
              {filteredPhotos.map((photo, index) => (
                <button
                  type="button"
                  className="weddingPhotoCard"
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`Open ${photo.title}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />

                  <div className="weddingPhotoOverlay">
                    <div>
                      <p>{photo.category}</p>
                      <h3>{photo.title}</h3>
                    </div>

                    <span className="viewPhotoIcon">↗</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            ONLINE ALBUMS
        ========================= */}

        {!hasVisibleContent && (
          <div className="emptyGallery">
            <p>NEW STORIES COMING SOON</p>
            <h2>
              This gallery is being <span>prepared</span>
            </h2>
          </div>
        )}
      </section>

      {/* =========================
          ONLINE ALBUM VIEWER
      ========================= */}

      {selectedAlbum && (
        <div
          className="albumViewer"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAlbum.title}
        >
          <button
            type="button"
            className="closeViewer"
            onClick={() => setSelectedAlbum(null)}
            aria-label="Close album"
          >
            ✕
          </button>

          <iframe
            src={selectedAlbum.albumUrl}
            title={selectedAlbum.title}
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* =========================
          PHOTO LIGHTBOX
      ========================= */}

      {selectedPhoto && (
        <div
          className="photoLightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="closePhotoViewer"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photograph"
          >
            ✕
          </button>

          {filteredPhotos.length > 1 && (
            <button
              type="button"
              className="photoNavigation photoNavigationPrevious"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousPhoto();
              }}
              aria-label="Previous photograph"
            >
              ‹
            </button>
          )}

          <div
            className="lightboxImageWrapper"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
            />

            <div className="lightboxCaption">
              <p>{selectedPhoto.category} Photography</p>
              <h3>{selectedPhoto.title}</h3>

              <span>
                {selectedPhotoIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>

          {filteredPhotos.length > 1 && (
            <button
              type="button"
              className="photoNavigation photoNavigationNext"
              onClick={(event) => {
                event.stopPropagation();
                showNextPhoto();
              }}
              aria-label="Next photograph"
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Album;