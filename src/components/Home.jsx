import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import Anurag from "../assets/Anurag.jpeg"
import Romy from "../assets/romy.jpeg"



const Home = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [experience, setExperience] = useState(0);


 useEffect(() => {

  const interval = setInterval(() => {

    setProjects((prev) => {
      if (prev >= 1000) return 1000;
      return prev + 10;
    });

    setClients((prev) => {
      if (prev >= 700) return 700;
      return prev + 7;
    });

  setExperience((prev) => {
  if (prev >= 8) return 8;

  return prev + 0.1;
});

  }, 30);

  return () => clearInterval(interval);

}, []);
  return (
    <div className="home">
      <section className="hero">

      
    <div className="heroBackground"></div>

<div className="heroGlow heroGlow1"></div>
<div className="heroGlow heroGlow2"></div>

<div className="heroContent">

  <p className="subHeading">
    Luxury Wedding Cinematography
  </p>

  <h1>
    We Create <span>Timeless</span>
    <br />
    Wedding Memories
  </h1>

  <p className="description">
    Premium cinematic wedding films and luxury photography
    crafted with emotions, elegance and storytelling.
  </p>

  <div className="heroButtons">
    <button className="primaryBtn">
      Explore Portfolio
    </button>

    <button className="secondaryBtn">
      Book Session
    </button>
  </div>

  <div className="mobileStats">

    <div className="mobileStatCard">
      <h2>{projects}+</h2>
      <p>Projects</p>
    </div>

    <div className="mobileStatCard">
      <h2>{clients}+</h2>
      <p>Clients</p>
    </div>

    <div className="mobileStatCard">
      <h2>{Math.floor(experience)}+</h2>
      <p>Years</p>
    </div>

  </div>

</div>
      </section>


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