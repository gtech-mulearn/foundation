import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from "./level.module.css";
import arrow from "../../assets/Home/Arrow.svg";
import lockIcon from "../../assets/LevelInfo/locked.png"

interface LevelCardProps {
  id: number;
  image: string;
  heading: string;
  description: string;
  bgcolor: string;
  url: string;
  lock:boolean
}

const LevelCard: React.FC<LevelCardProps> = ({
  id,
  image,
  heading,
  description,
  bgcolor,
  url,
 lock,
}) => {
  return (
  <Link href={lock?"":url}>
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

          {lock? <Image className={styles.lockIcon} src={lockIcon} alt=""/> :   
          <button>
            <Image src={arrow} alt="arrow" />
          </button>
          }
      </div>
    </div>
    </Link>
  );
};

export default LevelCard;
