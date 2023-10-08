import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import Logo from "../../assets/logo.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__logo">
          <a href="#about">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <FiInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <IoLogoTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Md. Mehedi Hasan. All Rights Reserved.</small>
        </div>

        <a href="#" className="scroll__up">
          Scroll Up
        </a>
      </div>
    </footer>
  );
};

export default Footer;
