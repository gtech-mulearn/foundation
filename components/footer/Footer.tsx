import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import logo from "../assets/logo_small.png";
import mulogo from "../assets/mulearn.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface FooterProps {
  bgColor: string;
}
const Footer: React.FC<FooterProps> = ({ bgColor }) => {
  return (
    <div className={styles.footContainer} style={{ backgroundColor: bgColor }}>
      <div className={styles.footerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.Flogo}>
            <Image src={logo} alt="foundation logo" />
          </div>
          <div className={styles.socialContainer}>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/mulearn.official/"
                  target="blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/gtechmulearn" target="blank">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@mulearn" target="blank">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://mulearn.org"
            target="blank"
            className={styles.muLogo}
          >
            <Image src={mulogo} alt="mulearn logo" />
          </a>
        </div>
        <div className={styles.copyright}>2024 © The Foundation Program</div>
      </div>
    </div>
  );
};
export default Footer;
