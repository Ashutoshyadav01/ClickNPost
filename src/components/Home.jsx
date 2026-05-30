import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import Anurag from "../assets/Anurag.jpeg"
import Romy from "../assets/romy.jpeg"
import Instagram from "./Instagram";
import Testemonial from "./Testemonial";


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

<Instagram/>
<Testemonial/>
{/* SERVICES SECTION */}
<section className="servicesSection">
  <p className="sectionTag">OUR EXPERTISE</p>

  <h2 className="sectionTitle">
    Crafted For Every <span>Beautiful Moment</span>
  </h2>

  <div className="servicesGrid">
    <div className="serviceCard">
      <h3>Wedding Photography</h3>
      <p>Elegant, emotional and timeless wedding photography for your most special day.</p>
    </div>

    <div className="serviceCard">
      <h3>Cinematic Films</h3>
      <p>Luxury wedding films with storytelling, emotions and cinematic visuals.</p>
    </div>

    <div className="serviceCard">
      <h3>Pre-Wedding Shoots</h3>
      <p>Creative couple portraits, dreamy locations and beautifully directed moments.</p>
    </div>

    <div className="serviceCard">
      <h3>Event Coverage</h3>
      <p>Professional coverage for birthdays, engagements, receptions and corporate events.</p>
    </div>
  </div>
</section>


{/* PROCESS SECTION */}
<section className="processSection">
  <p className="sectionTag">HOW WE WORK</p>

  <h2 className="sectionTitle">
    From First Call To <span>Final Film</span>
  </h2>

  <div className="processGrid">
    <div className="processCard">
      <h4>01</h4>
      <h3>Consultation</h3>
      <p>We understand your story, event style, dates and exact expectations.</p>
    </div>

    <div className="processCard">
      <h4>02</h4>
      <h3>Creative Planning</h3>
      <p>We plan shoot ideas, locations, poses, team and cinematic direction.</p>
    </div>

    <div className="processCard">
      <h4>03</h4>
      <h3>Shoot Day</h3>
      <p>Our team captures every emotion, detail and candid moment beautifully.</p>
    </div>

    <div className="processCard">
      <h4>04</h4>
      <h3>Delivery</h3>
      <p>You receive edited photos, cinematic films and memories for lifetime.</p>
    </div>
  </div>
</section>


{/* CTA SECTION */}
<section className="ctaSection">
  <h2>
    Let’s Capture Your <span>Dream Wedding</span>
  </h2>

  <p>
    Book your premium wedding photography and cinematic film session with ClickNPost.
  </p>

  <button className="primaryBtn">Book Your Date</button>
</section>
    </div>
  );
};

export default Home;