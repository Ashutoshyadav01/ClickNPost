import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import clickNpost from "../assets/clickNpost.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "./Header.css";

const links = ["Home",  "Services", "Album", "Buy Frames"];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="navBar">

        {/* LOGO */}
        <div className="logoContainer">
          <img
            src={clickNpost}
            alt="ClickNPost Logo"
            className="header-logo"
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="desktopNav">
          <ul className="lists">
            {links.map((items, key) => {
              return (
                <li key={key}>
                  <NavLink
                    to={
                      items === "Home"
                        ? "/"
                        : `/${items.toLowerCase().replace(" ", "-")}`
                    }
                    className={({ isActive }) =>
                      isActive ? "activeLink" : ""
                    }
                  >
                    {items}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <button className="bookBtn">
            Book Now
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="mobile-menu"
          onClick={() => setShowMenu(true)}
        >
          <Menu size={30} />
        </div>
      </header>

      {/* MOBILE SIDEBAR */}

      <div
        className={`mobileSidebar ${showMenu ? "showSidebar" : ""}`}
      >

        <div className="sidebarTop">
          <img
            src={clickNpost}
            alt="logo"
            className="mobileLogo"
          />

          <X
            size={28}
            className="closeIcon"
            onClick={() => setShowMenu(false)}
          />
        </div>

        <ul className="mobileLinks">
          {links.map((item, index) => {
            return (
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className={({ isActive }) =>
                  isActive ? "activeMobileLink" : ""
                }
                onClick={() => setShowMenu(false)}
              >
                {item}
              </NavLink>
            );
          })}
        </ul>

        <div className="mobileSocials">

          <a
            href="https://instagram.com/clicknpost_filmphotography"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={22} />
          </a>

        </div>
        <button className="mobileBookBtn">
          Book A Session
        </button>
      </div>

      {/* BACKDROP */}

      {showMenu && (
        <div
          className="backdrop"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </>
  );
};

export default Header;