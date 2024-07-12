"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./level.module.css";
import { status } from "../data"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LevelBox from "../../components/levelbox/LevelBox";
import { GoArrowLeft } from "react-icons/go";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../assets/level1/index";
import floatImg from "../../assets/level1/pathBlue.svg";

export default function Lvl1() {
  const router = useRouter();
  const backgroundColor1 = "#FFFFFF";
  const backgroundColor2 = "#688de2";

  const component1 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "Computational Thinking and Scratch.",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img1,
    },
    {
      id: 2,
      text1: "Tasks",
      text2: "Make a Scratch program",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img2,
    },
    {
      id: 3,
      text1: "Reference",
      text2: "Tutorial on Scratch",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img3,
    },
    {
      id: 4,
      text1: "Karma Points",
      text2: "100",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img4,
    },
  ];

  const component2 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "Mastering the Command Line, Git & GitHub.",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img5,
    },
    {
      id: 2,
      text1: "Tasks",
      text2: "Basics of Command Line, Git and create a GitHub account.",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img6,
    },
    {
      id: 3,
      text1: "Reference",
      text2:
        "1. Play with the command line.\n  2. File / Directory manipulation. \n 3. Pushing a README to GitHub. \n 4. Contributing to Foundation Program - First Contributor repo.",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img3,
    },
    {
      id: 4,
      text1: "Karma Points",
      text2: "400",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img4,
    },
  ];

  const component3 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "Introduction to Python",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img7,
    },
    {
      id: 2,
      text1: "Tasks",
      text2: "Let’s learn Python ",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img8,
    },
    {
      id: 3,
      text1: "Reference",
      text2: "Books: Learn Python the Hard Way.",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img3,
    },
    {
      id: 4,
      text1: "Karma Points",
      text2: "Easy - 10 \n Medium - 40 \n Hard - 100",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img4,
    },
  ];
  
  const item =status.find(d => d.level === 1);
  if (item && item.lock) {
    return (
      <h1 className={styles.comingSoonh1}>Coming Soon!</h1>
    );
  }
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
              LEVEL - 1
            </div>
            <div
              className={styles.subtitle}
              style={{ color: backgroundColor2 }}
            >
              Technical Foundation
            </div>
          </div>
        </div>
      </section>
      <div className={styles.contentBox}>
        <div className={styles.box}>
          {component1.map((component) => (
            <LevelBox
              key={component.id}
              backgroundColor1={component.colour1}
              backgroundColor2={component.colour2}
              text1={component.text1}
              text2={component.text2}
              imageUrl={component.imageUrl}
            />
          ))}
        </div>
        <div
          className={styles.floating}
          style={{ right: "2%", top: "10%", transform: "rotate(-40deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ left: "6%", top: "20%", transform: "rotate(-10deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ right: "4%", bottom: "10%", transform: "rotate(-20deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ left: "2%", bottom: "5%", transform: "rotate(-10deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.box}>
          {component2.map((component) => (
            <LevelBox
              key={component.id}
              backgroundColor1={component.colour1}
              backgroundColor2={component.colour2}
              text1={component.text1}
              text2={component.text2}
              imageUrl={component.imageUrl}
            />
          ))}
        </div>
        <div
          className={styles.floating}
          style={{ right: "2%", top: "20%", transform: "rotate(-30deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ right: "4%", bottom: "40%", transform: "rotate(-20deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ left: "6%", bottom: "25%", transform: "rotate(-40deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.box}>
          {component3.map((component) => (
            <LevelBox
              key={component.id}
              backgroundColor1={component.colour1}
              backgroundColor2={component.colour2}
              text1={component.text1}
              text2={component.text2}
              imageUrl={component.imageUrl}
            />
          ))}
        </div>
        <div
          className={styles.floating}
          style={{ right: "2%", top: "-4%", transform: "rotate(-30deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ left: "6%", top: "20%", transform: "rotate(-10deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ right: "5%", bottom: "60%", transform: "rotate(-40deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
        <div
          className={styles.floating}
          style={{ left: "2%", bottom: "5%", transform: "rotate(-10deg)" }}
        >
          <Image src={floatImg} alt="stars" fill={true} />
        </div>
      </div>
      <Footer bgColor="#0f0f0f" />
    </div>
  );
}
