import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Home.css";
import Anurag from "../assets/Anurag.jpeg"
import Romy from "../assets/romy.jpeg"
import home from "../assets/home.mp4";



const Home = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [experience, setExperience] = useState(0);

  const statsRef = useRef(null);

  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {

  const interval = setInterval(() => {

    setProjects((prev) => {
      if (prev < 1000) return prev + 10;
      return prev;
    });

    setClients((prev) => {
      if (prev < 700) return prev + 7;
      return prev;
    });

    setExperience((prev) => {
      if (prev < 8) return prev + 1;
      return prev;
    });

  }, 10);

  return () => clearInterval(interval);

}, []);
  return (
    <div className="home">
      <section className="hero">

        {/* BACKGROUND VIDEO */}
        <video
          className="backgroundVideo"
          src={home}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* DARK OVERLAY */}
        <div className="overlay"></div>

        {/* TOP BLUR GRADIENT */}
        <div className="topGradient"></div>

        {/* HERO CONTENT */}
        <div className="heroContent">
          <p className="subHeading">
            Best Photography Studio In Prayagraj
          </p>

          <h1>
            Capturing <span>Stories</span> <br />
            Beyond The <br />
            Ordinary
          </h1>

          <p className="description">
            Cinematic wedding films, timeless portraits and luxury photography
            crafted with emotion, elegance and storytelling.
          </p>

          <div className="heroButtons">
            <button className="primaryBtn">Explore Portfolio</button>

            <button className="secondaryBtn">
              Book A Session
            </button>
          </div>
        </div>

        {/* FLOATING STATS CARD */}
        <div className="floatingCard">
          <div className="cardItem">
            <h2>{projects}+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="divider"></div>

          <div className="cardItem">
            <h2>{clients}+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="divider"></div>

          <div className="cardItem">
            <h2>{experience}+</h2>
            <p>Years Experience</p>
          </div>
        </div>

        {/* SCROLL TEXT */}
        <div className="scrollText">
          <span></span>
          Scroll To Explore
        </div>
      </section>
      {/* ABOUT SECTION */}

{/* ABOUT SECTION */}

{/* ABOUT SECTION */}

<section className="aboutSection">

  {/* LEFT SIDE */}
  <div className="aboutLeft">

    <p className="sectionTag">
      THE FOUNDERS
    </p>

    <h2>
      Two Visionaries <br />
      Behind <span>ClickNPost</span>
    </h2>

    <p className="aboutText">
      What started with a camera and a passion for storytelling
      slowly transformed into one of Prayagraj’s most trusted
      photography and cinematic filmmaking brands.
    </p>

    <p className="aboutText">
      Founded by Mr. Anurag Shukla and Mr. Romy Khan,
      ClickNPost represents creativity, emotions and timeless visuals
      crafted through 7+ years of professional experience.
    </p>

    <div className="signatureLine"></div>

    <div className="experienceBox">
      <h1>7+</h1>
      <p>Years Of Professional Experience</p>
    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="foundersGrid">

    <div className="founderCard largeCard">
      <img
        src={Anurag}
        alt="Anurag Shukla"
      />

      <div className="founderOverlay">
        <h3>Mr. Anurag Shukla</h3>
        <p>Founder & Creative Director</p>
      </div>
    </div>

    <div className="founderCard smallCard">
      <img
        src={Romy}
        alt="Romy Khan"
      />

      <div className="founderOverlay">
        <h3>Mr. Romy Khan</h3>
        <p>Founder & Cinematic Filmmaker</p>
      </div>
    </div>

  </div>

</section>
    </div>
  );
};

export default Home;