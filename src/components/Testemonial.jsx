import React from 'react'
import "./Testemonial.css"
import { useState } from 'react';
import { href } from 'react-router-dom';
const googleReviews = [
    {
        name: "Pooja Srivastava",
        rating: 5,
        time: "Recently",
        text: "An absolutely शानदार photoshoot experience. Professional, creative, and super comfortable from start to finish. The final pictures turned out stunning.",
    },
    {
        name: "Dr Alka Rawat",
        rating: 5,
        time: "Recently",
        text: "Very good photography. I am satisfied with the quality of video, photos, album and final output. Thank you so much.",
    },
    {
        name: "Amit Kumar",
        rating: 5,
        time: "Recently",
        text: "Best photography team in Prayagraj. They captured every moment beautifully and delivered everything on time.",
    },
    {
        name: "Neha Singh",
        rating: 5,
        time: "Recently",
        text: "The team was very polite, creative and professional. Our wedding photos and cinematic video came out amazing.",
    },
    {
        name: "Rahul Mishra",
        rating: 5,
        time: "Recently",
        text: "Excellent work, very cooperative team and high-quality editing. Highly recommended for wedding shoots.",
    },
    {
        name: "Shreya Pandey",
        rating: 5,
        time: "Recently",
        text: "They made us feel very comfortable during the shoot. Every candid moment was captured perfectly.",
    },
    {
        name: "Ankit Verma",
        rating: 5,
        time: "Recently",
        text: "Amazing photography and cinematography. The album quality and video editing were really premium.",
    },
    {
        name: "Priya Gupta",
        rating: 5,
        time: "Recently",
        text: "Creative poses, beautiful frames and very professional behavior. Loved the final delivery.",
    },
    {
        name: "Saurabh Tiwari",
        rating: 5,
        time: "Recently",
        text: "One of the best film photography studios. Great team, great quality and wonderful experience.",
    },
];

const Testemonial = () => {
    const [activeReview, setActiveReview] = useState(0);
    const googleReviewLink =
  "https://www.google.com/search?q=click+n+post+film+photography+studio+jhusi+reviews#lrd=0x39854bb102e4fa9d:0xd85450b2c44277bd,3,,,,";
    const nextReview = () => {
        setActiveReview((prev) =>
            prev === googleReviews.length - 1 ? 0 : prev + 1
        );
    };

    const prevReview = () => {
        setActiveReview((prev) =>
            prev === 0 ? googleReviews.length - 1 : prev - 1
        );
    };
    return (
<>
        <section className="testimonialSection">
            <div className="testimonialHeader">
                <p className="sectionTag">GOOGLE REVIEWS</p>

                <h2 className="sectionTitle">
                    Loved By <span>Real Clients</span>
                </h2>
            </div>

            <div className="googleReviewBox">
                <button className="reviewArrow leftArrow" onClick={prevReview}>
                    ‹
                </button>

                <div className="googleReviewCard">
                    <div className="googleTop">
                        <div className="googleLogo">
                            <span style={{ color: "#4285f4" }}>G</span>
                            <span style={{ color: "#db4437" }}>o</span>
                            <span style={{ color: "#f4b400" }}>o</span>
                            <span style={{ color: "#4285f4" }}>g</span>
                            <span style={{ color: "#0f9d58" }}>l</span>
                            <span style={{ color: "#db4437" }}>e</span>
                        </div>

                        <div className="verifiedBadge">
                            ✓ Verified Review
                        </div>
                    </div>

                    <div className="reviewStars">
                        {"★".repeat(googleReviews[activeReview].rating)}
                    </div>

                    <p className="reviewText">
                        “{googleReviews[activeReview].text}”
                    </p>

                    <div className="reviewAuthor">
                        <div className="reviewAvatar">
                            {googleReviews[activeReview].name.charAt(0)}
                        </div>

                        <div>
                            <h3>{googleReviews[activeReview].name}</h3>
                            <p>{googleReviews[activeReview].time} on Google</p>
                        </div>
                    </div>
                </div>

                <button className="reviewArrow rightArrow" onClick={nextReview}>
                    ›
                </button>
            </div>

            <div className="reviewDots">
                {googleReviews.map((_, index) => (
                    <button
                        key={index}
                        className={activeReview === index ? "activeDot" : ""}
                        onClick={() => setActiveReview(index)}
                    ></button>
                ))}
            </div>
            {/* <button onClick={()=>{href="https://www.google.com/search?client=ms-android-samsung-ss&hs=L3yp&sca_esv=325ec1a3d004bdb9&sxsrf=ANbL-n7KJBTWFchFmDCN4G0owMxC3HA3hg:1780130330749&q=click+n+post+film+photography+studio+jhusi+reviews&uds=ALYpb_n_SbpgMvCIjpiwXwgYNWHi-kVaY3LokOd6A2avuA2xvD41JsM-Au8N0HyP4sRUI5iNjayLNZOZzJvDw4jTsGsa1xEr7tsUTZTi5SJ_WpJjqhBfnxvNt57IZNCGjz_hZotsqxAofU_y8jECvky5dxPAuqtqEQfuaAIMtCRup69G47Mvk_V-AWEZd50RWIv7cNVztQPm12UD9KJELVMZxZv3mLJfE1Jhhs96hm-vmTtNkMBo2FxT-wi_t4Fd6l6UuWdIzV6i6XuhHxnBPFnTr_cBz9IugUVRyVqhYIdbwc9FuClJGKk51nz1mT3uyvXIMYJ22AHzl3B1VVm9oZWpiS1hJxzI4gBEZyb5kkMawsoEh8CjAXYlIfz3UJxIVeK0xPkNXJG9Tdt-gR5nWuyVyuAgIXcorAci299ZMRXBQLYe1JY2Z1m2kqLxjBXP80RMjB8IVs5ZRpIiY-uUdXX-SlEtJbC4gw&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYq356Xa6RDf4-8YJ8-w8w-i9GrcQbskIQWy5iq0ME9gXe6t7YAEwm7kmIyeiZtxE_3I8YLaNzPIdzNeJHBD_W2mqYQFRyx_U127Czio1DxZ5uVdFh7Rmm2KcXYY5VLRbLoTC10%3D&sa=X&ved=2ahUKEwjLq5KgzuCUAxWsyzgGHXPpK_cQk8gLegQIHBAB&ictx=1&biw=384&bih=728&dpr=2.81#ebo=3&lrd=0x39854bb102e4fa9d:0xd85450b2c44277bd,3,,,,"}}>Drop your Review</button> */}
            <button
  className="dropReviewBtn"
  onClick={() => window.open(googleReviewLink, "_blank", "noopener,noreferrer")}
>
  <span className="googleMiniLogo">
    <span style={{ color: "#4285f4" }}>G</span>
    <span style={{ color: "#db4437" }}>o</span>
    <span style={{ color: "#f4b400" }}>o</span>
    <span style={{ color: "#4285f4" }}>g</span>
    <span style={{ color: "#0f9d58" }}>l</span>
    <span style={{ color: "#db4437" }}>e</span>
  </span>
  Drop Your Review
</button>   
<section className="whyUsSection">

  <div className="whyUsHeader">
    <p className="whyTag">WHY US</p>

    <h2 className="whyTitle">
      Because Years Later,
      <br />
      Feelings Matter More Than Photos.
    </h2>
  </div>

  <div className="whyTextCard">

    <div className="accentLine"></div>

    <h2 className="storyTitle">
      We Don't Follow Moments.
      <br />
      We Anticipate Them.
    </h2>

    <p className="storyText">
      The tear in a father's eye. The smile your partner gives when
      no one is watching. The emotions that happen between the poses.
    </p>

    <p className="storyEnding">
      That's where the real story lives.
    </p>

  </div>

</section>

        </section>
</>
       
    )
}

export default Testemonial