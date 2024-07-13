"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../lvl1/level.module.css";
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
  img9,
  img10,
  img11,
  img12,
} from "../../assets/level2/index";
import floatImg from "../../assets/level2/pathGreen.svg";

export default function Lvl2() {
  const router = useRouter();

  const backgroundColor1 = "#FFFFFF";
  const backgroundColor2 = "#61C294";

  const component1 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "Introduction to Flask",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img1,
    },
    {
      id: 2,
      text1: "Tasks",
      text2: "Create an API only App.",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img2,
    },
    {
      id: 3,
      text1: "Reference",
      text2: "Tutorial",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img3,
    },
    {
      id: 4,
      text1: "Karma Points",
      text2: "200",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img4,
    },
  ];

  const component2 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "SQL and Databases",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img5,
    },
    {
      id: 2,
      text1: "Tasks",
      text2:
        "1. Let’s make your Flask App more awesome.  \n 2. Todo List API app.",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img6,
    },
    {
      id: 3,
      text1: "Reference",
      text2: "Watch the sessions",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img3,
    },
    {
      id: 4,
      text1: "Karma Points",
      text2: "300",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img4,
    },
  ];

  const component3 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "Introduction to HTML, CSS",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img7,
    },
    {
      id: 2,
      text1: "Tasks",
      text2: "Introduction to HTML, CSS",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img8,
    },
    {
      id: 3,
      text1: "Reference",
      text2: ":]",
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

  const component4 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "Introduction to fundamentals of JS.",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img9,
    },
    {
      id: 2,
      text1: "Tasks",
      text2: "1. Incorporating JS into Portfolio app \n 2. Exercism track",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img10,
    },
    {
      id: 3,
      text1: "Reference",
      text2: ":]",
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

  const component5 = [
    {
      id: 1,
      text1: "Topics Covered",
      text2: "Super Flask App",
      colour1: backgroundColor1,
      colour2: backgroundColor2,
      imageUrl: img11,
    },
    {
      id: 2,
      text1: "Tasks",
      text2: "Make a Full stack app using Flask.",
      colour1: backgroundColor2,
      colour2: backgroundColor1,
      imageUrl: img12,
    },
    {
      id: 3,
      text1: "Reference",
      text2: ":]",
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
  const item =status.find(d => d.level === 2);
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
              LEVEL - 2
            </div>
            <div
              className={styles.subtitle}
              style={{ color: backgroundColor2 }}
            >
              Introduction to <br />
              How the Web Works
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
      <div className={styles.contentBox}>
        <div className={styles.box}>
          {component4.map((component) => (
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
          {component5.map((component) => (
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
      <Footer bgColor="#0f0f0f" />
    </div>
  );
}
