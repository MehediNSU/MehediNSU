import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/md-mehedi-hasan-80b804161/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://github.com/MehediNSU/" target="_blank" rel="noreferrer">
        {" "}
        <GrGithub />
      </a>
      <a
        href="https://facebook.com/m4mehedi26/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <ImFacebook2 />
      </a>
      <a
        href="https://twitter.com/mehedi_hasan26"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
