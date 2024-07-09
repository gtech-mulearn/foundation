import React from "react";
import Link from 'next/link';
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <a href="/" className={styles.navLogoContainer}>
        <div className={styles.navLogo}>
          <Image src={logo} alt="logo" />
        </div>
        <span></span>
      </a>
      <div className={styles.navLevelsContainer}>
        <Link href="/lvl1">
          <div className={styles.navLevels}>LEVEL 1</div>
        </Link>
        <Link href="/lvl2">
          <div className={styles.navLevels}>LEVEL 2</div>
        </Link>
        <Link href="/lvl3">
          <div className={styles.navLevels}>LEVEL 3</div>
        </Link>
        <Link href="/lvl4">
          <div className={styles.navLevels}>LEVEL 4</div>
        </Link>
      </div>
      <div className={styles.navSocialsContainer}>
        <a href="https://www.instagram.com/mulearn.official/" target="blank" className={styles.navSocials}>
          <FaInstagram />
          <p>Instagram</p>
        </a>
        <a href="https://www.facebook.com/gtechmulearn" target="blank"  className={styles.navSocials}>
          <FaFacebook /> <p>Facebook</p>
        </a>
        <a href="https://www.youtube.com/@mulearn" target="blank" className={styles.navSocials}>
          <FaYoutube /> <p>Youtube</p>
        </a>
      </div>
    </div>
  );
}
