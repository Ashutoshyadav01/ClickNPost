import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
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
      GAUTAM BIJLANI PHOTOGRAPHY
    </p>

    <h2>
      Creating Timeless <br />
      Wedding Memories
    </h2>

    <p className="footerDescription">
      Luxury wedding cinematography and premium photography
      studio based in Varanasi, capturing emotions,
      elegance and unforgettable stories.
    </p>

  <div className="footerMap">

  <iframe
    src="https://www.google.com/maps?q=197+Tulsipur+Varanasi+221010&output=embed"
    width="100%"
    height="260"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Gautam Bijlani Photography Location"
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

<div className="footerColumn">

  <h3>Studio Information</h3>

  <div className="footerInfoCard">
    <FaMapMarkerAlt className="infoIcon" />

    <p>
      197, Tulsipur,
      Varanasi, Uttar Pradesh 221010
    </p>
  </div>

  <div className="footerInfoCard">
    <FaClock className="infoIcon" />

    <p>
      {/* TODO: confirm full weekly hours — listing only
          showed "Opens 9am Fri" for the closed day checked */}
      Opens 9am · Hours vary by day
    </p>
  </div>

  <div className="footerInfoCard">
    <FaPhoneAlt className="infoIcon" />

    <p>
      +91 99190 99495
    </p>
  </div>

  <div className="footerInfoCard">
    <FaEnvelope className="infoIcon" />

    <p>
      {/* TODO: replace with real business email */}
      gautambijlaniphotography@gmail.com
    </p>
  </div>

  {/* SOCIAL ICONS */}

  <div className="socialIcons">

    <a
      href="https://www.instagram.com/gautam_bijlani/"
      target="_blank"
      rel="noreferrer"
      className="instagramIcon"
    >
      <FaInstagram size={22}/>
    </a>

    <a
      href="https://www.facebook.com/gautam.bijlani.9/"
      target="_blank"
      rel="noreferrer"
      className="facebookIcon"
    >
      <FaFacebookF size={20} />
    </a>

    <a
      href="https://www.youtube.com/watch?v=CbV_P8KQSuE"
      target="_blank"
      rel="noreferrer"
      className="youtubeIcon"
    >
      <FaYoutube size={22} />
    </a>

  </div>

</div>

 

</div>

      {/* BOTTOM */}

      <div className="footerBottom">

        <p>
          © 2026 Gautam Bijlani Photography. All Rights Reserved.
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