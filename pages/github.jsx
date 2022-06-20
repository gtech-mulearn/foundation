import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import styles from "../styles/github.module.css";
import Github from "../components/Github/Github";
const github = () => {
  return (
    <>
      <Head>
        <title>The Foundation Program</title>
        <meta
          name="description"
          content="Welcome to The Foundation Program Website, This Page lists all the contributors who successfully completed the Github Assignment"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Github />
        <Footer />
      </main>
    </>
  );
};

export default github;
