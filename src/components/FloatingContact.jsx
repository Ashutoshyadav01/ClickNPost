import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import "./FloatingContact.css";

// Update these if the details change
const PHONE_NUMBER = "+91 99190 99495";
const WHATSAPP_NUMBER = "919919099495";

const FloatingContact = () => {
  return (
    <div className="floatingContact">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="floatingBtn whatsappBtn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
        className="floatingBtn callBtn"
        aria-label="Call us"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/gautam_bijlani/"
        target="_blank"
        rel="noreferrer"
        className="floatingBtn instagramBtn"
        aria-label="Follow us on Instagram"
      >
        <FaInstagram size={24} />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/watch?v=CbV_P8KQSuE"
        target="_blank"
        rel="noreferrer"
        className="floatingBtn youtubeBtn"
        aria-label="Watch us on YouTube"
      >
        <FaYoutube size={24} />
      </a>

    </div>
  );
};

export default FloatingContact;