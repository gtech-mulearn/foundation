import React from "react";
import styles from "./task.module.css";
import TaskCard from "@/components/TaskCard/TaskCard";
import data from "./Data";
import { DataItem } from "./Data";
const TaskInfo: React.FC = () => {
  return (
    <section id={styles.taskInfo}>
      <div className={styles.taskCardContainer}>
        {data.map((item: DataItem) => (
          <TaskCard key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.taskTextContainer}>
        <p>
          Set-up your system and <span>start</span> work today
        </p>
        <button>Start Now</button>
      </div>
    </section>
  );
};

export default TaskInfo;
