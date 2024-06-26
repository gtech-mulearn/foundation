import React from 'react'
import styles from './levelbox.module.css'
import Image, { StaticImageData } from 'next/image'

interface DynamicComponentProps {
    backgroundColor1: string;
    backgroundColor2: string;
    text1: string;
    text2: string;
    imageUrl: StaticImageData;
  }

  const LevelBox: React.FC<DynamicComponentProps> = ({
    backgroundColor1,
    backgroundColor2,
    text1,
    text2,
    imageUrl,
  }) => {
    const colour1 = {backgroundColor: backgroundColor1};
    const colour2 = {backgroundColor: backgroundColor2};
    const text2WithLineBreaks = text2.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));

    return(
        <div className={styles.backgroundBox} style={colour1}>
            <div className={styles.textContainer}>
                <div className={styles.title} style={colour2}>{text1}</div>
                <div className={styles.subtitle} style={colour2}>{text2WithLineBreaks}</div>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.img}>
                <Image src={imageUrl} alt='graphic image'  />
                </div>
            </div>
        </div>  
    )
}


export default LevelBox;