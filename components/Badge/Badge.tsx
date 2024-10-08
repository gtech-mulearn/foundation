import React from "react";
import Image from "next/image";
import scratchBadge from "../../assets/BadgeCollection/Badges/scratch.png";
import cmdBadge from "../../assets/BadgeCollection/Badges/cmdNinja.png"
import gitBadge from "../../assets/BadgeCollection/Badges/Git.png"
import styles from "../../modules/BadgeCollection/badge.module.css";

interface BadgeProps {
  task: string;
}

const Badge: React.FC<BadgeProps> = ({ task }) => {
  let imgUrl: any;
  let badgeName: string = "";
  switch (task) {
    case "Scratch Mastery":
      imgUrl = scratchBadge;
      badgeName = "Scratch Mastery";
      break;
    case "Command Ninja":
      imgUrl = cmdBadge;
      badgeName = "Command Ninja";
      break;
    case "Git Lord":
      imgUrl = gitBadge;
      badgeName = "Git Lord";
      break;
    default:
      imgUrl = "";
      break;
  }
  return (
    <div>
      <Image src={imgUrl} alt="Badge" />
      <h3 className={styles.badgeName}>{badgeName}</h3>
    </div>
  );
};

export default Badge;
