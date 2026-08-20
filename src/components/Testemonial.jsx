import React from 'react'
import "./Testemonial.css"
import { useState } from 'react';

const googleReviews = [
    {
        name: "Shailendra Pandey",
        rating: 5,
        time: "2 years ago",
        text: "If you want a 10/10 photographer or videographer for your event, wedding or product photoshoot, Gautam Bijlani is the go-to-person. I approached him a couple of times for family events for photography and his results were truly amazing.",
    },
    {
        name: "Verma Priyanka",
        rating: 5,
        time: "2 years ago",
        text: "Gautam Bijlani's Photography is best photography. He is very polite and very smart person. His work is soo fine. I have contacted him for my two functions and will be booking him for my upcoming functions too. I will recommend everyone to contact him, he is best in Varanasi.",
    },
    {
        name: "Vaibhav",
        rating: 5,
        time: "a year ago",
        text: "I've had the pleasure of working with Gautam Bijlani Photography on several occasions, and I can confidently say they are incredibly talented in all kinds of photography! Whether it's portraits, events, landscapes, or product shots, they deliver every time.",
    },
    {
        name: "Nitin Sehta",
        rating: 5,
        time: "a year ago",
        text: "One of the best n experienced photography team of the town. Their team are smart n highly trained professionals.",
    },
    {
        name: "Mohd Quasim",
        rating: 5,
        time: "3 months ago",
        text: "He is very good photographer and his work ethic is very good.",
    },
    {
        name: "Saumy Agrawal",
        rating: 5,
        time: "3 months ago",
        text: "One of the best in the business. You can reach out for any requirements — Wedding, Functions, Birthday.",
    },
];

const Testemonial = () => {
    const [activeReview, setActiveReview] = useState(0);
    const googleReviewLink =
  "https://www.google.com/search?q=gautam+bijlani+photography+varanasi+reviews";
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

                <div className="googleRatingSummary">
                    <span className="ratingNumber">4.6</span>
                    <span className="ratingStars">★★★★★</span>
                    <span className="ratingCount">90+ Google Reviews</span>
                </div>
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

export default Testemonial;