import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foundation Program</title>
        <meta
          name="description"
          content="Welcome to The Foundation Program Website, Enter your foundaton program Id and view all the badges you have aquired untill now in the program"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Input />
        <Footer />
      </main>
    </div>
  );
}
