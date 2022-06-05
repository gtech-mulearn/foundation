import React from "react";
import styles from "./Footer.module.css";

import instagarm from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";

import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footercontents}>
        <div className={styles.logos}>
          <div className={styles.social}>
            <a href="https://www.instagram.com/gtechmulearn/" target="_blank">
              <Image
                src={instagarm}
                alt="instagram"
                width={40}
                height={40}
                objectFit="contain"
              />
            </a>
          </div>
          <div className={styles.social}>
            <a href="https://twitter.com/GtechMulearn" target="_blank">
              <Image
                src={twitter}
                alt="twitter"
                width={40}
                height={40}
                objectFit="contain"
              />
            </a>
          </div>
          <div className={styles.social}>
            <a href="https://www.youtube.com/c/mulearn" target="_blank">
              <Image
                src={youtube}
                alt="youtube"
                width={40}
                height={40}
                objectFit="contain"
              />
            </a>
          </div>
        </div>
        <p className={styles.copyright}>2022 © µLearn Foundation Program</p>
      </div>
    </div>
  );
};

export default Footer;
