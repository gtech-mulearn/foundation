"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../lvl1/level.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LevelBox2 from "../../components/levelbox2/LevelBox2";
import { GoArrowLeft } from "react-icons/go";
import floatImg from "../../assets/level4/pathRed.svg";

export default function Lvl4() {
  const router = useRouter();
  const backgroundColor2 = "#F36B37";

  return (
    <div className={styles.main}>
      <Navbar />
      <section className={styles.sectionContainer}>
        <div className={styles.header}>
          <div className={styles.backButton} onClick={() => router.back()}>
            <div className={styles.rotate}>
              <GoArrowLeft size="3em" color={backgroundColor2} />
            </div>
          </div>
          <div className={styles.titleContainer}>
            <div
              className={styles.title}
              style={{ backgroundColor: backgroundColor2 }}
            >
              LEVEL - 4
            </div>
            <div
              className={styles.subtitle}
              style={{ color: backgroundColor2 }}
            >
              Profile and Interview Prep
            </div>
          </div>
        </div>
      </section>
      <div className={styles.boxContainer}>
        <div className={styles.contentBox}>
          <LevelBox2
            backgroundColor2={backgroundColor2}
            text1="01"
            text2="Branching into domain specific expertise Providing students who complete the Open Build Challenge with different domains to build expertise in and guide them to do the following."
          />
          <div
            className={styles.floating}
            style={{ right: "2%", top: "-20%", transform: "rotate(-10deg)" }}
          >
            <Image src={floatImg} alt="stars" fill={true} />
          </div>
          <div
            className={styles.floating}
            style={{ left: "4%", top: "0%", transform: "rotate(40deg)" }}
          >
            <Image src={floatImg} alt="stars" fill={true} />
          </div>
          <div
            className={styles.floating}
            style={{ right: "4%", bottom: "-20%", transform: "rotate(40deg)" }}
          >
            <Image src={floatImg} alt="stars" fill={true} />
          </div>
          <div
            className={styles.floating}
            style={{ left: "2%", bottom: "-40%", transform: "rotate(-10deg)" }}
          >
            <Image src={floatImg} alt="stars" fill={true} />
          </div>
        </div>
      </div>
      <Footer bgColor="#0f0f0f" />
    </div>
  );
}
