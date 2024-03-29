import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Mulearn from "./assets/Mulearn.png";
import Link from "next/link";


const Navbar = () => {
  return (
    <Link href="/">
      <div className={styles.nav_container}>
        <Image
          src={Mulearn}
          alt="Mulearn"
          width={125}
          height={125}
          objectFit="contain"
        />
        <div className={styles.nline}></div>
        <p className={styles.title}>
          The
          <br />
          Foundation
          <br />
          Program
        </p>
      </div>
    </Link>
  );
};

export default Navbar;
