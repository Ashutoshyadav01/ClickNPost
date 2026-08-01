import React, { useEffect, useMemo, useState } from "react";
import "./Album.css";

/* =====================================================
   LOCAL PHOTO IMPORTS

   Images automatically load from these folders:

   src/assets/weddings
   src/assets/haldi
   src/assets/maternity
   src/assets/bridal
   src/assets/pre-weddings
   src/assets/engagements
===================================================== */

const weddingImageModules = import.meta.glob(
  "/src/assets/compressed/weddings/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const haldiImageModules = import.meta.glob(
  "/src/assets/compressed/haldi/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const maternityImageModules = import.meta.glob(
  "/src/assets/compressed/maternity/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const bridalImageModules = import.meta.glob(
  "/src/assets/compressed/bridal/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const preWeddingImageModules = import.meta.glob(
  "/src/assets/compressed/pre-weddings/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const engagementImageModules = import.meta.glob(
  "/src/assets/compressed/engagements/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


// const anniversaryImageModules = import.meta.glob(
//   "/src/assets/anniversaries/*.{jpg,jpeg,png,webp,avif}",
//   {
//     eager: true,
//     query: "?url",
//     import: "default",
//   }
// );

/* =====================================================
   PHOTO CONFIGURATION
===================================================== */

const photoCollections = [
  {
    category: "Wedding",
    singularName: "Wedding",
    modules: weddingImageModules,
  },
  {
    category: "Haldi",
    singularName: "Haldi",
    modules: haldiImageModules,
  },
  {
    category: "Maternity",
    singularName: "Maternity",
    modules: maternityImageModules,
  },
  {
    category: "Bridal",
    singularName: "Bridal",
    modules: bridalImageModules,
  },
  {
    category: "Pre Wedding",
    singularName: "Pre-Wedding",
    modules: preWeddingImageModules,
  },
  {
    category: "Engagement",
    singularName: "Engagement",
    modules: engagementImageModules,
  },
  // {
  //   category: "Anniversary",
  //   singularName: "Anniversary",
  //   modules: anniversaryImageModules,
  // },
];

const getPhotoNumber = (filePath) => {
  const fileName = filePath.split("/").pop() || "";
  const numberMatch = fileName.match(/(\d+)(?=\.[^.]+$)/);

  return numberMatch ? Number(numberMatch[1]) : 0;
};

const localPhotos = photoCollections.flatMap(
  ({ category, singularName, modules }) =>
    Object.entries(modules)
      .map(([path, src]) => {
        const photoNumber = getPhotoNumber(path);

        return {
          id: `${category}-${path}`,
          src,
          path,
          number: photoNumber,
          category,
          title: `${singularName} Moment ${photoNumber || ""}`.trim(),
        };
      })
      .sort((firstPhoto, secondPhoto) => {
        return firstPhoto.number - secondPhoto.number;
      })
);

/* =====================================================
   VIDEOS
===================================================== */

const albumVideos = [
  {
    id: 1,
    title: "Wedding Film",
    category: "Wedding",
    videoId: "RrW1-2rTxeU",
  },
  {
    id: 2,
    title: "Engagement Film",
    category: "Engagement",
    videoId: "Q3D9w06Timk",
  },
  {
    id: 3,
    title: "Pre Wedding Film",
    category: "Pre Wedding",
    videoId: "i6yQPobUvE8",
  },
  // {
  //   id: 5,
  //   title: "Anniversary Film",
  //   category: "Anniversary",
  //   videoId: "cZzZ2l7y5Kw",
  // },
  {
    id: 7,
    title: "Cinematic Film",
    category: "Wedding",
    videoId: "nO7O1XkBlVU",
  },
  {
    id: 8,
    title: "Luxury Film",
    category: "Pre Wedding",
    videoId: "aMq7HxjsI98",
  },
];

/* =====================================================
   ONLINE FLIP ALBUMS
===================================================== */


const categories = [
  "All",
  "Wedding",
  "Haldi",
  "Maternity",
  "Bridal",
  "Pre Wedding",
  "Engagement",
  // "Anniversary",
];

const Album = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") {
      return albumVideos;
    }

    return albumVideos.filter(
      (video) => video.category === activeCategory
    );
  }, [activeCategory]);



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
    setPlayingId(null);
    setSelectedAlbum(null);
    setSelectedPhoto(null);
  };

  const photoSectionTitle =
    activeCategory === "All"
      ? "Our Photography"
      : `${activeCategory} Photography`;

  const hasVisibleContent =
    filteredVideos.length > 0 ||
    filteredPhotos.length > 0;

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
            VIDEOS
        ========================= */}

        {filteredVideos.length > 0 && (
          <div className="albumContentBlock">
            <div className="galleryHeading">
              <p>CINEMATIC STORIES</p>

              <h2>
                Featured <span>Films</span>
              </h2>

              <div className="headingLine"></div>
            </div>

            <div className="videoGrid">
              {filteredVideos.map((video) => (
                <div className="videoCard" key={video.id}>
                  <div className="videoFrame">
                    {playingId === video.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                        title={video.title}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <button
                        type="button"
                        className="videoThumbnail"
                        onClick={() => setPlayingId(video.id)}
                        style={{
                          backgroundImage: `url(https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg)`,
                        }}
                        aria-label={`Play ${video.title}`}
                      >
                        <div className="thumbnailOverlay"></div>

                        <div className="customPlayBtn">
                          <span>▶</span>
                        </div>
                      </button>
                    )}
                  </div>

                  <div className="videoContent">
                    <p>{video.category}</p>
                    <h3>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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