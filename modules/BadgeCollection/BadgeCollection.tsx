"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./badge.module.css";
import searchIcon from "@/assets/BadgeCollection/search.svg";
import SendIcon from '@mui/icons-material/Send';
import tfpImg from "@/assets/BadgeCollection/tfpImg.png";
import topLeftParticle from "@/assets/BadgeCollection/particle-top-left.svg";
import topRightParticle from "@/assets/BadgeCollection/particle-top-right.svg";
import bottomLeftParticle from "@/assets/BadgeCollection/particle-bottom-left.svg";
import bottomRightParticle from "@/assets/BadgeCollection/particle-bottom-right.svg";
import Badge from "@/components/Badge/Badge";

interface Badge {
  full_name: string;
  completed_tasks: any[]; 
}

const BadgeCollection: React.FC = () => {
  const [data, setData] = useState<Badge | null>(null);
  const [muid, setMuid] = useState<string>("");
  const api = "https://dev.mulearn.org/api/v1/dashboard/profile/badges/";

  const fetchData = async () => {
    try {
      const response = await axios.get<{ response: Badge }>(api + muid);
      setData(response.data.response); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const setDummyTasks = () => {
    setData({
      full_name: "Arjun C Vinod",
      completed_tasks: ["#TFP2.0-scratch", "#TFP2.0-scratch", "#TFP2.0-scratch"],
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMuid(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDummyTasks()
    // fetchData();
  };

  return (
    <section id={styles.badgeCollection}>
      <div className={styles.wrapperBox}>
        <div className={styles.badgeContainer}>
          <h1 >
            Collect Your <span>Badges</span>
          </h1>
          <div className={styles.subHeads}>
            <h3>Create your profile and earn your badges.</h3>
            <h2>Don’t forget to tag us on if you post them</h2>
            <Image src={tfpImg} alt="tfp" />
          </div>
          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <label>
              <Image src={searchIcon} alt="search" />
            </label>
            <input
              type="text"
              placeholder="Enter Your µ-id"
              value={muid}
              onChange={handleInputChange}
            />
            <button type="submit" className={styles.fetchBadgeBtn}> <SendIcon /> </button>
          </form>
          <div className={styles.badgeDisplayContainer}>
            {data && (
              <div>
                <h2 className={styles.badgeHeading}>Badges of <span>{data.full_name}</span></h2>
                <div className={styles.badgeImgContainer}>
                  {data.completed_tasks.map((task, index) => (
                    <Badge key={index} task={task}/>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.BadgeParticlesContainer}>
          <Image src={topLeftParticle} alt="top-left-particle" />
          <Image src={topRightParticle} alt="top-right-particle" />
          <Image src={bottomLeftParticle} alt="bottom-left-particle" />
          <Image src={bottomRightParticle} alt="bottom-right-particle" />
        </div>
      </div>
    </section>
  );
};

export default BadgeCollection;
