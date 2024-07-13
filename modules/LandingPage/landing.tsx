import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import Logo from "../../assets/Home/Logo.svg";
import verticalDivider from "../../assets/Home/Vertical Divider.png";
import FtpLogo from "../../assets/Home/foundation logo.png";
import HeroText from "../../assets/Home/Hero Text.svg";
import tlp from "../../assets/Home/topleftparticle.svg";
import trp from "../../assets/Home/toprightparticle.svg";
import lcp from "../../assets/Home/leftcentreparticle.svg";
import rcp from "../../assets/Home/rightcentreparticle.svg";
import brp from "../../assets/Home/bottomrightpartcle.svg";
import Arrow from "../../assets/Home/Arrow.svg";
import explore from "../../assets/Home/explore.svg";
import playbtn from "../../assets/Home/play-btn.svg";
export default function landing() {
  return (
    <>
      <div className={styles.bg}></div>
      <section id={styles.hero}>
        <nav className={styles.navBar}>
          <a href="https://mulearn.org/" target="blank" className={styles.logo}>
            <Image src={Logo} alt="logo" />
            <Image src={verticalDivider} alt="VD" />
            <h3>The Foundation Program</h3>
          </a>
        </nav>
        <div className={styles.heroTextContainer}>
          <div className={styles.heroLogotWrapper}>
            <Image src={FtpLogo} alt="ftplogo" />
          </div>
          <div className={styles.heroTextWrapper}>
            <Image src={HeroText} alt="HeroTxt" />
          </div>
        </div>
        <div className={styles.textContainer}>
          {/* <div className={styles.left}>
            <div className={styles.textWrapper}>
              <h2>Code </h2>
              <h2>Create</h2>
              <h2>Conquer</h2>
            </div>
          </div> */}
          {/* <div className={styles.right}>
            <div className={styles.textWrapper}>
              <h3>
                Your<span> 30 </span>day skill revolution <br />
                starts here!
              </h3>
            </div>
          </div> */}
         <h3>
         Your gateway to getting started with <br className={styles.br}/> programming and technology from ground-up
         </h3>

  
        </div>
        <div className={styles.scrollBtnContainer}>
          <a href="#levelInfo">
            <button>
              <Image src={Arrow} alt="arrow" /> scroll
            </button>
          </a>
        </div>

        <div className={styles.butttonsContainer}>
        

        <a
          href="https://mulearn.notion.site/The-Foundation-Program-f8ba5f4b2f174aeb8ff60155d52d7b44"
          className={styles.mainBtn}
          style={{ backgroundColor: "#F36B37" }}
        >
          Checkout Notion
        </a>
        <a
          href="https://mulearn.org/r/tfpregistration"
          className={styles.mainBtn}
          style={{ backgroundColor: "#61C294" }}
        >
          Register
        </a>
        <a
          href="https://discord.mulearn.org"
          className={styles.mainBtn}
          style={{ backgroundColor: " #688DE2" }}
        >
          Join Discord
        </a>
        </div>

        <div className={styles.particles}>
          <Image src={tlp} alt="particle" />
          <Image src={trp} alt="particle" />
          <Image src={lcp} alt="particle" />
          <Image src={rcp} alt="particle" />
          <Image src={brp} alt="particle" />
        </div>
      </section>
      {/* <div className={styles.exploreMoreContainer}>
        <div className={styles.exploreCircle}>
          <Image src={explore} alt="explor" className={styles.exploreRotate} />
          <Image src={playbtn} alt="play" className={styles.explorePlay} />
        </div>
        <a
          href="https://mulearn.org/r/tfpregistration"
          className={styles.regNowBtn}
          style={{ backgroundColor: "#F36B37" }}
        >
          Register Now
        </a>

        <a
          href="https://mulearn.notion.site/The-Foundation-Program-f8ba5f4b2f174aeb8ff60155d52d7b44"
          className={styles.regNowBtn}
          style={{ backgroundColor: "#61C294" }}
        >
          Checkout Notion Page
        </a>
        <a
          href="https://discord.mulearn.org"
          className={styles.regNowBtn}
          style={{ backgroundColor: " #688DE2" }}
        >
          Join Discord
        </a>
      </div> */}
    </>
  );
}
