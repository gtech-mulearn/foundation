import React from "react";
import styles from "./Input.module.css";
import Image from "next/image";

import Roadmap from "./assets/Roadmap.png";

const Input = () => {
  return (
    <div className={styles.inputcontainer}>
      <div className={styles.firstsection}>
        <div className={styles.m_header}>
          The Way to your <span>Future.</span>{" "}
        </div>
        <div className={styles.roadmap}>
          <Image
            src={Roadmap}
            alt="mao"
            width={500}
            height={300}
            objectFit="contain"
          />
        </div>
      </div>

      <div className={styles.aboutcontainer}>
        <p className={styles.a_header}>More About Our Program.</p>
        <p className={styles.abouttfp}>
          The Foundation Program is a 30-Day Hybrid Bootcamp aimed at addressing
          the skill gap by helping students up-skill with a foundation program
          in programming and web development. The program aims to help the
          students build a foundational skill level to find opportunities in the
          Industry.
        </p>
      </div>

      <div className={styles.badges}>
        <p className={styles.b_header}>Collect Badges</p>
        <p className={styles.b_description}>
          You will be awarded with unique badges each time you complete a
          stage/assignment. You can share that with your friends and followers
          as you achievement. Enter you foundation program id to view your
          badges and download them.
        </p>
      </div>

      <div className={styles.searchfield}>
        <input type="text" name="" id="" className={styles.inputfield} />
        <button type="submit" className={styles.btnsubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Input;
