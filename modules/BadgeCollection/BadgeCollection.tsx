import React from "react";
import Image from "next/image";
import styles from "./badge.module.css";
import searchIcon from "@/assets/BadgeCollection/search.svg"
import tfpImg from "@/assets/BadgeCollection/tfpImg.png"
import topLeftParticle from "@/assets/BadgeCollection/particle-top-left.svg"
import topRightParticle from "@/assets/BadgeCollection/particle-top-right.svg"
import bottomLeftParticle from "@/assets/BadgeCollection/particle-bottom-left.svg"
import bottomRightParticle from "@/assets/BadgeCollection/particle-bottom-right.svg"
export default function BadgeCollection() {
  return (
    <section id={styles.badgeCollection}>
      <div className={styles.wrapperBox}>
        <div className={styles.badgeContainer}>
          <h1>Collect Your <span>Badges</span></h1>
          <div className={styles.subHeads}>
            <h3>Create your profile and earn your badges.</h3>
            <h2>Don’t forget to tag us on if you post them</h2>
            <Image src={tfpImg} alt=""/>
          </div>
          <div className={styles.inputContainer}>
            <label><Image src={searchIcon} alt=""/></label>
            <input type="text" placeholder="Enter Your µ-id" />
          </div>
        </div>
        <div className={styles.BadgeParticlesContainer}>
          <Image src={topLeftParticle} alt=""/>
          <Image src={topRightParticle} alt=""/>
          <Image src={bottomLeftParticle} alt=""/>
          <Image src={bottomRightParticle} alt=""/>
        </div>
      </div>
    </section>
  );
}
