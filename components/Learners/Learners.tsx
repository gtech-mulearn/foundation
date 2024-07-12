"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./learners.module.css";
import Image from "next/image";
const img = "https://avatars.githubusercontent.com/u/68469520?v=4";
interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url?: string;
}

export function Learners1() {
  const [data, setData] = useState<Contributor[]>([]);
  
  useEffect(() => {
    axios
      .get<Contributor[]>(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=1"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.learnersContainer}>
      {data.slice(0, 7).map((item,index) => (
         index !== 5 && (
        <a href={item.html_url} key={item.id} target="_blank" rel="noopener noreferrer">
          <Image
            src={item.avatar_url}
            alt={item.login}
            width={50}
            height={50}
            className={styles.learnerImg}
          />
        </a>
     ) ))}
    </div>
  );
}
export function Learners2() {
  const [data, setData] = useState<Contributor[]>([]);

  useEffect(() => {
    axios
      .get<Contributor[]>(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=3"
      )
      .then((response) => {

        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.learnersContainer}>
      {data.slice(0, 5).map((item) => (
        <a href={item.html_url} key={item.id} target="_blank" rel="noopener noreferrer">
          <Image
            src={item.avatar_url}
            alt={item.login}
            width={50}
            height={50}
            className={styles.learnerImg}
          />
        </a>
      ))}
      <a href="" className={styles.learnerButton} >
        +99
      </a>
    </div>
  );
}
