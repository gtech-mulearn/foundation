import React from "react";
import styles from "./taskcard.module.css";
import Image from "next/image";
import scratchImg from "../../assets/TaskInfo/api.svg";
interface TaskCardProps {
  id: number;
  image: string;
  heading: string;
  description: string;
  bgcolor: string;
  txtcolor: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  image,
  heading,
  description,
  bgcolor,
  txtcolor,
}) => {
  return (
    <div className={styles.taskCard} style={{backgroundColor:bgcolor}}>
      <h1>{heading}</h1>
      <div className={styles.langContainer}>
        <Image src={image} alt="" />
      </div>
      <p style={{color:txtcolor}}>{description}</p>
    </div>
  );
};

export default TaskCard;
