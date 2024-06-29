import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Navbar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navLogoContainer}>
                <div className={styles.navLogo}>
                    <Image
                        src= {logo}
                        alt="logo"
                        />
                </div>
                <span></span>
            </div>
            <div className= {styles.navLevelsContainer}>
                <div className={styles.navLevels}>LEVEL 1</div>
                <div className={styles.navLevels}>LEVEL 2</div>
                <div className={styles.navLevels}>LEVEL 3</div>
                <div className={styles.navLevels}>LEVEL 4</div>
            </div>
            <div className={styles.navSocialsContainer}>
                <div className={styles.navSocials}><FaInstagram /><p>Instagram</p></div>
                <div className={styles.navSocials}><FaFacebook /> <p>Facebook</p></div>
                <div className={styles.navSocials}><FaYoutube /> <p>Youtube</p></div>
            </div>
        </div>
    )}