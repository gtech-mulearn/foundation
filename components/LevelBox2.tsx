import React from 'react'
import styles from './levelbox2.module.css'

interface DynamicComponentProps {
    backgroundColor2: string;
    text1: string;
    text2: string;
  }

  const LevelBox: React.FC<DynamicComponentProps> = ({
    backgroundColor2,
    text1,
    text2,
  }) => {
    const colour2 = {backgroundColor: backgroundColor2};
    const text2WithLineBreaks = text2.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));

    return(
        <div className={styles.backgroundBox} style={colour2}>
            <div className={styles.textContainer}>
                <div className={styles.title}>{text1}</div>
                <span></span>
                <div className={styles.subtitle}>{text2WithLineBreaks}</div>
            </div>
        </div>  
    )
}


export default LevelBox;