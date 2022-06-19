import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Avatar from "@mui/material/Avatar";

import styles from "../styles/github.module.css";
const github = () => {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=1"
      )
      .then(function (response) {
        setData1(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

      axios
      .get(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=2"
      )
      .then(function (response) {
        setData2(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

      axios
      .get(
        "https://api.github.com/repos/gtech-mulearn/TFP-Github-Task/contributors?per_page=100&page=3"
      )
      .then(function (response) {
        setData3(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  if (data3) {
    return (
      <>
        <main className={styles.main}>
          <Navbar />
          <div className={styles.gcontainer}>
            <p className={styles.m_header}>
              <span>Contributions</span> by our <span>Cool Learners.</span>{" "}
            </p>
            <div className={styles.contributors_container}>
              {data1.map((item) => {
                return (
                  <>
                    <div key={item.id} className={styles.contributor}>
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
                  </>
                );
              })}
            </div>
            <div className={styles.contributors_container}>
              {data2.map((item) => {
                return (
                  <>
                    <div key={item.id} className={styles.contributor}>
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
                  </>
                );
              })}
            </div>
            <div className={styles.contributors_container}>
              {data3.map((item) => {
                return (
                  <>
                    <div key={item.id} className={styles.contributor}>
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
                  </>
                );
              })}
            </div>
          </div>
          <Footer />
        </main>
      </>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default github;
