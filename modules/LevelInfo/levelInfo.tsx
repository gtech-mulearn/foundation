import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./level.module.css";
import LevelCard from "@/components/LevelCard/LevelCard";
import data from "./Data";
import { DataItem } from "./Data";
import Image from "next/image";
import online from "../../assets/LevelInfo/Online.svg";
const LevelInfo: React.FC = () => {
  return (
    <>
      <section id="levelInfo" className={styles.levelInfo}>
        <div className={styles.levelCardContainer}>
          {data.map((item: DataItem) => (
            <LevelCard key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.startsSoonContainer}>
          <button>
            More Coming Soon
            <Image src={online} alt="online" />
          </button>
        </div>
        <div className={styles.levelTextContainer}>
          <h1>What are we trying to solve?</h1>
          <h2>Adapt to tech changes</h2>
          <p>
            Skill gap hinders employment despite job availability. Address this
            crucial issue now.
          </p>
        </div>
      </section>
      <div className={styles.horizontalTextContainer}>
        <Marquee>
          <h1 style={{ color: "#688DE2" }}>Code&nbsp;&nbsp;.&nbsp;&nbsp;</h1>
          <h1 style={{ color: "#61C294" }}>Create&nbsp;&nbsp;.&nbsp;&nbsp;</h1>
          <h1 style={{ color: "#F36B37" }}>Conquer&nbsp;&nbsp;.&nbsp;&nbsp;</h1>
          <h1 style={{ color: "#688DE2" }}>Code&nbsp;&nbsp;.&nbsp;&nbsp;</h1>
          <h1 style={{ color: "#61C294" }}>Create&nbsp;&nbsp;.&nbsp;&nbsp;</h1>
          <h1 style={{ color: "#F36B37" }}>Conquer&nbsp;&nbsp;.&nbsp;&nbsp;</h1>
        </Marquee>
      </div>
    </>
  );
};

export default LevelInfo;
