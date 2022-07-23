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
        <div className={styles.roadmap}>
          <Image
            src={Roadmap}
            alt="map"
            width={1000}
            height={650}
            objectFit="fill"
          />
        </div>

        <div className={styles.m_left}>
          <p className={styles.m_header}>
            Build the perfect <span>Foundation</span> Secure your{" "}
            <span>Future.</span>
          </p>
          <div className={styles.subtxt}>
            <p className={styles.m_numbers}>
              {" "}
              <span>200+</span> Active Learners
            </p>
            <p className={styles.m_numbers}>
              <span>Unlimited</span> Resources
            </p>
          </div>
          <div className={styles.buttons}>
            <a href="https://discord.com/invite/Jt7sv3chZP">
              <button className={styles.discordjoin}>
                Join Discord Server
              </button>
            </a>
            
            <a target="_blank" rel="noopener noreferrer"  href="https://mulearn.notion.site/The-Foundation-Program-f8ba5f4b2f174aeb8ff60155d52d7b44">
              <button className={styles.notion}>Checkout Notion Page</button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.aboutcontainer}>
        <p className={styles.a_header}>
          Learn more about The Foundation Program
        </p>

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
            Together let &apos;s <span>craft your foundation!</span>
          </p>
          <p className={styles.y_desc}>
            We believe in Democratizing and Demonetizing Education and do not
            limit access to our resources in any manner. All session recordings
            are available on our YouTube Channel. You are just a click away from
            learning something new and interesting. Click and Learn!
          </p>
        </div>

        <div className={styles.y_right}>
          <iframe
            className={styles.y_frame}
            src="https://www.youtube.com/embed/xaw9jf01M9g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.githubcontainer}>
        <div className={styles.g_center}>
          <p className={styles.g_header}>
            <span>Contributions</span> by our <span>Cool</span> learners
          </p>
          <p className={styles.g_tagline}>
            Over 200 Learners completed the Github Assignment and successfully
            merged their pull request with the organisation &apos;s github
            repository. Click the link to have a look at our contributors.
          </p>
          <div className="btn">
            <Link href="/github">
              <button className={styles.githubjoin}>Check it out!</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.badges}>
        <p className={styles.b_header}>View your TFP Profile</p>
        <p className={styles.b_description}>
          For each TFP-task that you complete successfully, you will be awarded
          with Karma points to add to your collection and some bad-ass badges to
          show off to your Social Circles. Enter your unique TFP-id to view the
          badges you’ve earned. Feel free to tag us when you flaunt them on your
          socials.
        </p>
      </div>

      <div className={styles.searchfield}>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          type="text"
          placeholder="Enter your unique TFP-id"
          name=""
          id=""
          className={styles.inputfield}
        />
        <a href={`/profile/${id}`}>
          <button type="submit" className={styles.btnsubmit}>
            Search
          </button>
        </a>
      </div>
      <br />
      <p className={styles.b_description}>
        Tip: Check the first mail you received from us for your unique TFP-id
      </p>
    </div>
  );
};

export default Input;
