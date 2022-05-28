import React from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    // <div className={s.footer} >
      <div className="text-center" style={{"padding":"10px"}}>
      <span className={s.footerLabel}>2022 &copy; Made with love  <FooterIcon /> by Mohd Junaid</span>
     
    </div>
  )
}

export default Footer;
