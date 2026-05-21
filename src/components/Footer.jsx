import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerGlow"></div>

     <div className="footerContainer">

  {/* LEFT */}

  <div className="footerBrand">

    <p className="footerTag">
      CLICK N POST STUDIO
    </p>

    <h2>
      Creating Timeless <br />
      Wedding Memories
    </h2>

    <p className="footerDescription">
      Luxury wedding cinematography and premium photography
      studio based in Prayagraj, capturing emotions,
      elegance and unforgettable stories.
    </p>

    <a
      href="https://www.google.com/maps/place/Click+n+post+Film+Photography+Studio/@25.4256941,81.9105095,17z/data=!3m1!4b1!4m6!3m5!1s0x39854bb102e4fa9d:0xd85450b2c44277bd!8m2!3d25.4256941!4d81.9130898!16s%2Fg%2F11xfltfvs3"
      target="_blank"
      rel="noreferrer"
      className="mapBtn"
    >
      Visit Studio
    </a>

  </div>

  {/* CENTER */}

  <div className="footerColumn">

    <h3>Services</h3>

    <a href="/">Wedding Photography</a>
    <a href="/">Cinematic Films</a>
    <a href="/">Pre Wedding Shoots</a>
    <a href="/">Engagement Shoots</a>
    <a href="/">Baby Shoots</a>

  </div>

  {/* RIGHT */}

  <div className="footerColumn">

    <h3>Studio Information</h3>

    <p>
      Krishna Complex, 1/237 MIG,
      Lal Chowk, Jhusi,
      Prayagraj, Uttar Pradesh
    </p>

    <p>
      Mon - Sun : 10am – 10pm
    </p>

    <p>
      +91 98765 43210
    </p>

    <p>
      clicknpoststudio@gmail.com
    </p>

  </div>

</div>

      {/* BOTTOM */}

      <div className="footerBottom">

        <p>
          © 2026 Click N Post Studio. All Rights Reserved.
        </p>

        <a
          href="https://portfoliowebsite0101.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Designed & Developed by Ashutosh Kumar
        </a>

      </div>

    </footer>
  );
};

export default Footer;