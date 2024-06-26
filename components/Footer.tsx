import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import logo from './assets/logo_small.png'
import mulogo from './assets/mulearn.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.Flogo}><Image src={logo} alt='foundation logo'/></div>
                <div className={styles.socialContainer}>
                    <ul>
                        <li><FaInstagram /></li>
                        <li><FaFacebook /></li>
                        <li><FaYoutube /></li>
                    </ul>
                </div>
                <div className={styles.muLogo}><Image src={mulogo} alt='mulearn logo'/></div>
            </div>
            <div className={styles.copyright}>2024 © The Foundation Program</div>

        </div>
    )}