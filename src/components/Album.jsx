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

const categories = [
  "All",
  "Wedding",
  "Pre Wedding",
  "Birthday",
  "Newborn",
  "Engagement",
  "Anniversary",
];

const Album = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState(null);

  const filteredVideos =
    activeCategory === "All"
      ? albumVideos
      : albumVideos.filter((video) => video.category === activeCategory);

  return (
    <div className="albumPage">
      <section className="albumHero">
        <p className="albumTag">CLICK N POST ALBUM</p>

        <h1>
          Our Beautiful <span>Stories</span>
        </h1>

        <p className="albumDescription">
          Explore our premium wedding films, pre-wedding shoots, birthday,
          engagement and newborn memories captured with love and cinematic
          elegance.
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
              }}
            >
              {category}
            </button>
          ))}
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
      </section>
    </div>
  );
};

export default Album;