import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";


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

  <div className="footerMap">

  <iframe
    src="https://www.google.com/maps?q=Click+n+Post+Film+Photography+Studio+Prayagraj&output=embed"
    width="100%"
    height="260"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Click N Post Studio Location"
  ></iframe>

</div>

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

{/* RIGHT */}

<div className="footerColumn">

  <h3>Studio Information</h3>

  <div className="footerInfoCard">
    <FaMapMarkerAlt className="infoIcon" />

    <p>
      Krishna Complex, 1/237 MIG,
      Lal Chowk, Jhusi,
      Prayagraj, Uttar Pradesh
    </p>
  </div>

  <div className="footerInfoCard">
    <FaClock className="infoIcon" />

    <p>
      Mon - Sun : 10am – 10pm
    </p>
  </div>

  <div className="footerInfoCard">
    <FaPhoneAlt className="infoIcon" />

    <p>
      +91 98765 43210
    </p>
  </div>

  <div className="footerInfoCard">
    <FaEnvelope className="infoIcon" />

    <p>
      clickNpoststudio@gmail.com
    </p>
  </div>

  {/* SOCIAL ICONS */}

  <div className="socialIcons">

    <a
      href="https://www.instagram.com/clickNpost_filmphotography/"
      target="_blank"
      rel="noreferrer"
      className="instagramIcon"
    >
      <FaInstagram size={22}/>
    </a>

    <a
      href="https://facebook.com/"
      target="_blank"
      rel="noreferrer"
      className="facebookIcon"
    >
      <FaFacebookF size={20} />
    </a>

  </div>

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