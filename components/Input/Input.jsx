import React, { useState } from "react";
import styles from "./Input.module.css";
import Image from "next/image";
import Link from "next/link";

import Roadmap from "./assets/Roadmap.png";

const Input = () => {
  const [id, setId] = useState("");
  return (
    <div className={styles.inputcontainer}>
      <div className={styles.firstsection}>
        <div className={styles.m_header}>
          The Way to your <span>Future.</span>{" "}
        </div>
        <div className={styles.roadmap}>
          <Image
            src={Roadmap}
            alt="map"
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

      <div className={styles.youtube}>
        <div className={styles.y_left}>
          <p className={styles.y_header}>
            Come, Let's <span>make the Foundation Together.</span>
          </p>
          <p className={styles.y_desc}>
            All of the past released videos are publically available to learn at
            our Youtube Channel. New information is just at your mouse click.
            Click & Learn!.
          </p>
        </div>
        <div className={styles.y_right}>
          <iframe
            className={styles.y_frame}
            src="https://www.youtube.com/embed/xaw9jf01M9g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className={styles.badges}>
        <p className={styles.b_header}>View & Collect Badges</p>
        <p className={styles.b_description}>
          You will be awarded with unique badges each time you complete a
          stage/assignment. You can share that with your friends and followers
          as you achievement. Enter you foundation program id to view your
          badges and download them.
        </p>
      </div>

      <div className={styles.searchfield}>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          type="text"
          name=""
          id=""
          className={styles.inputfield}
        />
        <Link href={`\ ${id}`}>
          <button type="submit" className={styles.btnsubmit}>
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Input;
