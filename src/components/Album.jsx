import React, { useState } from "react";
import "./Album.css";

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
  {
    id: 4,
    title: "Birthday Film",
    category: "Birthday",
    videoId: "QcUKx7DaSPc",
  },
  {
    id: 5,
    title: "Anniversary Film",
    category: "Anniversary",
    videoId: "cZzZ2l7y5Kw",
  },
  {
    id: 6,
    title: "Newborn Shoot",
    category: "Newborn",
    videoId: "ZzZpvzv4fp4",
  },
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

const albumLinks = [
  {
    id: 101,
    title: "Dr. Pradeep Wedding Album",
    category: "See your Album",
    cover:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    albumUrl:
      "https://flipix.in/v1/?m=RHIuUHJhZGVlcERyLlNoaWtoYV8xMl8yMl80MQ==",
  },

  {
    id: 102,
    title: "Arpit & Rishika Album",
    category: "See your Album",
    cover:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    albumUrl:
      "https://flipix.in/v1/?m=QXJwaXRSaXNoaWthXzY5OTZlMWNkYjc5NDE=",
  },

  {
    id: 103,
    title: "Sanjay & Pooja Album",
    category: "See your Album",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    albumUrl:
      "https://flipix.in/v1/?m=U2FuamF5UG9vamFfNmExMTY2MzdkMDM4Yg==",
  },

  {
    id: 104,
    title: "Rajweds Sonakshi Album",
    category: "See your Album",
    cover:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    albumUrl:
      "https://flipix.in/v1/?m=UmFqd2Vkc1NvbmFrc2hpXzZhMGVmNjRmNmIyZDE=",
  },
];

const categories = [
  "All",
  "Wedding",
  "Pre Wedding",
  "See your Album",
  "Birthday",
  "Newborn",
  "Engagement",
  "Anniversary",
];

const Album = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const filteredVideos =
    activeCategory === "All"
      ? albumVideos
      : albumVideos.filter((video) => video.category === activeCategory);

  const filteredAlbums =
    activeCategory === "All"
      ? albumLinks
      : albumLinks.filter((album) => album.category === activeCategory);

  return (
    <div className="albumPage">
      <section className="albumHero">
        <p className="albumTag">CLICK N POST ALBUM</p>

        <h1>
          Our Beautiful <span>Stories</span>
        </h1>

        <p className="albumDescription">
          Explore our premium wedding films and cinematic memories.
        </p>
      </section>

      <section className="albumSection">
        <div className="albumTabs">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "activeTab" : ""}
              onClick={() => {
                setActiveCategory(category);
                setPlayingId(null);
                setSelectedAlbum(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredVideos.length > 0 && (
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
                    <div
                      className="videoThumbnail"
                      onClick={() => setPlayingId(video.id)}
                      style={{
                        backgroundImage: `url(https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg)`,
                      }}
                    >
                      <div className="thumbnailOverlay"></div>

                      <div className="customPlayBtn">
                        <span>▶</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="videoContent">
                  <p>{video.category}</p>
                  <h3>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredAlbums.length > 0 && (
          <div className="albumGrid">
            {filteredAlbums.map((album) => (
              <div className="albumCard" key={album.id}>
                <img src={album.cover} alt={album.title} />

                <div className="albumCardOverlay">
                  <h2>{album.title}</h2>

                  <button
                    className="openAlbumBtn"
                    onClick={() => setSelectedAlbum(album)}
                  >
                    Open Album
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {selectedAlbum && (
        <div className="albumViewer">
          <button
            className="closeViewer"
            onClick={() => setSelectedAlbum(null)}
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
    </div>
  );
};

export default Album;