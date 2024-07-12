import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from "./level.module.css";
import arrow from "../../assets/Home/Arrow.svg";

interface LevelCardProps {
  id: number;
  image: string;
  heading: string;
  description: string;
  bgcolor: string;
  url: string;
}

const LevelCard: React.FC<LevelCardProps> = ({
  id,
  image,
  heading,
  description,
  bgcolor,
  url,
}) => {
  return (
  <Link href={`/${url}`}>
    <div className={styles.levelCard} style={{ backgroundColor: bgcolor }}>
      <div className={styles.levelTop}>
        <div className={styles.levelLeft}>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.levelRight}>
          <Image src={image} alt={`Level ${id}`} />
        </div>
      </div>
      <div className={styles.levelBottom}>
      
          <button>
            <Image src={arrow} alt="arrow" />
          </button>
        
      </div>
    </div>
    </Link>
  );
};

export default LevelCard;
