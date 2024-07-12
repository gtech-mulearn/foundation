import React from "react";
import Head from "next/head";
import styles from "./github.module.css";
import Github from "../../components/Github/Github";
import Footer from "@/components/footer/Footer";
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
        <Github />
        <Footer bgColor="transparent"/>
      </main>
    </>
  );
};

export default github;