import React from 'react'
import Image from 'next/image'
import styles from '../lvl1/level.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LevelBox2 from '../../components/levelbox2/LevelBox2'
import { GoArrowLeft } from "react-icons/go";
import floatImg from '../../assets/level3/pathYellow.svg'


export default function Lvl3() {

  const backgroundColor2 = '#FDD549';
  const textWithLineBreak ='They’ll learn about GitHub, open-source contributions, and formal email writing.\n \n Sharing earned badges on social media will earn 25 points each.'

  return (
    <div className={styles.main}>
      <Navbar />
      <section className={styles.sectionContainer}>
        <div className={styles.header}>
          <div className={styles.backButton}><div className={styles.rotate}>
            <GoArrowLeft   size='3em' color={backgroundColor2}/>
          </div></div>
          <div className={styles.titleContainer}>
            <div className={styles.title} style={{backgroundColor: backgroundColor2}}>LEVEL - 3</div>
            <div className={styles.subtitle} style={{color: backgroundColor2}}>Profile and Interview Prep</div>
          </div>
        </div>
      </section>
      <div className={styles.boxContainer}>
        <div className={styles.contentBox}>
                  <LevelBox2
                    backgroundColor2={backgroundColor2}
                    text1="01"
                    text2="Students will enhance their profiles with skills like resume and portfolio building, professional communication, leadership, and public speaking."
                  />
            <div className={styles.floating} style={{right: '2%', top: '-20%', transform: 'rotate(-10deg)'}}><Image src={floatImg} alt='stars' fill={true}/></div>
            <div className={styles.floating} style={{left: '4%', top: '0%', transform: 'rotate(40deg)'}}><Image src={floatImg} alt='stars' fill={true}/></div>
           
        </div>
        <div className={styles.contentBox}>
                  <LevelBox2
                    backgroundColor2={backgroundColor2}
                    text1="02"
                    text2={textWithLineBreak}
                    />
            <div className={styles.floating} style={{right: '2%', top: '10%', transform: 'rotate(20deg)'}}><Image src={floatImg} alt='stars' fill={true}/></div>
            <div className={styles.floating} style={{left: '3%', top: '40%', transform: 'rotate(-10deg)'}}><Image src={floatImg} alt='stars' fill={true}/></div>
            <div className={styles.floating} style={{right: '4%', bottom: '-20%', transform: 'rotate(40deg)'}}><Image src={floatImg} alt='stars' fill={true}/></div>
            <div className={styles.floating} style={{left: '2%', bottom: '-40%', transform: 'rotate(-10deg)'}}><Image src={floatImg} alt='stars' fill={true}/></div>
        </div>
      </div>
      <div className={styles.footContainer}>
          <Footer />
        </div>
    </div>
  )
}
