import React from "react";
import scratchBadge from "../../assets/BadgeCollection/Badges/scratch.png";
import styles from "../../modules/BadgeCollection/badge.module.css"
import Image from "next/image";

interface BadgeProps {
  task: string;
}

const Badge: React.FC<BadgeProps> = ({ task }) => {
  let imgUrl: any;

  switch (task) {
    case "#TFP2.0-scratch":
      imgUrl = scratchBadge;
      break;
    default:
      imgUrl = "";
      break;
  }

  return (
    <div>
      <Image src={imgUrl} alt="" />
      <h3 className={styles.badgeName}>{task}</h3>
    </div>
  );
};

export default Badge;
