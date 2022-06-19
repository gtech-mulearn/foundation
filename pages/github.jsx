
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


import styles from "../styles/github.module.css";
import Github from "../components/Github/Github";
const github = () => {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <Github />
        <Footer />
      </main>
    </>
  );
};

export default github;
