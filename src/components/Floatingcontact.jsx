import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./FloatingContact.css";

// Update these two if the number changes
const PHONE_NUMBER = "+91 99190 99495";
const WHATSAPP_NUMBER = "919919099495"; // country code + number, no spaces or symbols

const FloatingContact = () => {
  return (
    <div className="floatingContact">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="floatingBtn whatsappBtn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      <a
        href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
        className="floatingBtn callBtn"
        aria-label="Call us"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default FloatingContact;