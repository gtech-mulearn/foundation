import React from "react";
import styles from "./level.module.css";
import LevelCard from "@/components/LevelCard/LevelCard";
import data from "./Data";
import { DataItem } from "./Data";
import Image from "next/image";
import online from "../../assets/LevelInfo/Online.svg";
import tabletScreen from "../../assets/LevelInfo/ai tablet screen.svg"
const LevelInfo: React.FC = () => {
  return (
    <section id={styles.levelInfo}>
      <div className={styles.levelCardContainer}>
        {data.map((item: DataItem) => (
          <LevelCard key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.startsSoonContainer}>
        <button>
          Starts Soon
          <Image src={online} alt="online" />
        </button>
      </div>
      <div className={styles.levelTextContainer}>
        <h1>What are we trying to solve?</h1>
        <h2>Adapt to tech changes</h2>
        <p>Skill gap hinders employment despite job availability. Address this crucial issue now.</p>
        <Image src={tabletScreen} alt=""/>
      </div>
    </section>
  );
};

export default LevelInfo;
