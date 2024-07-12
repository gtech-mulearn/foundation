import React from "react";
import Link from 'next/link';
import styles from "./navbar.module.css";
import { status } from "../../app/data"
import Image from "next/image";
import logo from "../assets/logo.png";
import LockIcon from '@mui/icons-material/Lock';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const lvl1Status = status.find(d => d.level === 1)?.lock;
  const lvl2Status = status.find(d => d.level === 2)?.lock;
  const lvl3Status = status.find(d => d.level === 3)?.lock;
  const lvl4Status = status.find(d => d.level === 4)?.lock;

  return (
    <div className={styles.navContainer}>
      <a href="/" className={styles.navLogoContainer}>
        <div className={styles.navLogo}>
          <Image src={logo} alt="logo" />
        </div>
        <span></span>
      </a>
      <div className={styles.navLevelsContainer}>
  
        <Link href={lvl1Status?"":"/lvl1"}>
          <div className={styles.navLevels}>LEVEL 1 {lvl1Status && <LockIcon/>}</div>
        </Link>
        <Link href={lvl2Status?"":"/lvl2"}>
          <div className={styles.navLevels}>LEVEL 2{lvl2Status && <LockIcon/>}</div>
        </Link>
        <Link href={lvl3Status?"":"/lvl3"}>
          <div className={styles.navLevels}>LEVEL 3 {lvl3Status && <LockIcon/>}</div>
        </Link>
        <Link href={lvl4Status?"":"/lvl4"}>
          <div className={styles.navLevels}>LEVEL 4
          {lvl4Status && <LockIcon/>}
          </div>
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
