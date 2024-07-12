"use client"
import React, { useState, useEffect } from "react";
import styles from "../../app/github/github.module.css";

import Avatar from "@mui/material/Avatar";
import axios from "axios";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const Github: React.FC = () => {
  const [data1, setData1] = useState<Contributor[] | undefined>(undefined);
  const [data2, setData2] = useState<Contributor[] | undefined>(undefined);
  const [data3, setData3] = useState<Contributor[] | undefined>(undefined);

  useEffect(() => {
    axios
      .get<Contributor[]>(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=1"
      )
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get<Contributor[]>(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=2"
      )
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get<Contributor[]>(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=3"
      )
      .then((response) => {
        setData3(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data3 && data2 && data1) {
    return (
      <>
        <div className={styles.gcontainer}>
          <p className={styles.m_header}>
            <span>GitHub Contributions</span> by our <span>Cool Learners.</span>{" "}
          </p>
          <p className={styles.mtagline}>
            As part of The Foundation Program, Over 200 learners successfully
            created a pull request satisfying all the requirements of
            assignments which were later merged into the organisation&apos;s
            repository. And here we present our Cool Contributors.
          </p>
          <div className={styles.contributors_container}>
            {data1.map((item) => (
              <a
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
              >
                <div className={styles.contributor}>
                  <Avatar
                    alt={item.login}
                    src={item.avatar_url}
                    sx={{ width: 66, height: 66 }}
                  />
                  <p className={styles.name}>
                    {item.login.length > 9
                      ? item.login.substring(0, 6) + "..."
                      : item.login}
                  </p>
                </div>
              </a>
            ))}
            {data2.map((item) => (
              <a
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
              >
                <div className={styles.contributor}>
                  <Avatar
                    alt={item.login}
                    src={item.avatar_url}
                    sx={{ width: 66, height: 66 }}
                  />
                  <p className={styles.name}>
                    {item.login.length > 9
                      ? item.login.substring(0, 6) + "..."
                      : item.login}
                  </p>
                </div>
              </a>
            ))}
            {data3.map((item) => (
              <a
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
              >
                <div className={styles.contributor}>
                  <Avatar
                    alt={item.login}
                    src={item.avatar_url}
                    sx={{ width: 66, height: 66 }}
                  />
                  <p className={styles.name}>
                    {item.login.length > 9
                      ? item.login.substring(0, 6) + "..."
                      : item.login}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Github;
