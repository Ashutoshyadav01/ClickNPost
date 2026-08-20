import React from 'react'
import "./Instagram.css"

import { InstagramEmbed } from "react-social-media-embed";


const instagramPosts = [
  "https://www.instagram.com/p/DWtqnDIgXIV/",
  "https://www.instagram.com/p/DYkJRnmgSLV/",
  "https://www.instagram.com/p/DYTi920AZfU/",
  "https://www.instagram.com/p/DYQ9xsABfIb/",
  "https://www.instagram.com/p/DWj0tdAgXPw/",
  "https://www.instagram.com/p/DWMoQXBAUPX/",
  "https://www.instagram.com/p/DVVxi3ygZl2/",
  "https://www.instagram.com/p/DUn3bQ_iCKM/",
];

const Instagram = () => {
  return (
   
<section className="portfolioSection">

  <div className="portfolioHeader">

    <p className="sectionTag">
      FEATURED WORK
    </p>

    <h2 className="sectionTitle">
      Stories From <span>Instagram</span>
    </h2>

    <p className="portfolioDescription">
      Explore our latest cinematic captures, wedding moments,
      luxury portraits and timeless stories directly from our Instagram gallery.
    </p>

  </div>

  <div className="instagramGrid">

    {instagramPosts.map((post, index) => (

      <div className="instagramCard" key={index}>

        <InstagramEmbed
          url={post}
          width="100%"
        />

      </div>

    ))}

  </div>

  <div className="instagramButtonWrap">

    <a
      href="https://www.instagram.com/clickNpost_filmphotography/"
      target="_blank"
      rel="noreferrer"
      className="instagramFollowBtn"
    >
      View More On Instagram
    </a>

  </div>

</section>
  )
}

export default Instagram