import lvlImg1 from "../../assets/LevelInfo/lvl1-img.svg";
import lvlImg2 from "../../assets/LevelInfo/lvl2-img.svg";
import lvlImg3 from "../../assets/LevelInfo/lvl3-img.svg";
import lvlImg4 from "../../assets/LevelInfo/lvl4-img.svg";
import { status } from "../../app/data"; // Make sure this path is correct

const lvl1Status = status.find(d => d.level === 1)?.lock;
const lvl2Status = status.find(d => d.level === 2)?.lock;
const lvl3Status = status.find(d => d.level === 3)?.lock;
const lvl4Status = status.find(d => d.level === 4)?.lock;

export interface DataItem {
  id: number;
  image: string;
  heading: string;
  description: string;
  bgcolor: string;
  url: string;
  lock: boolean;
}

const data: DataItem[] = [
  {
    id: 1,
    image: lvlImg4,
    heading: "Week 0",
    description: "Let’s craft your story! - with Scratch",
    bgcolor: "#F36B37",
    url: "https://mulearn.notion.site/Assignment-1-Scratch-bca017eba24844528810bb1e74e1abc7",
    lock: lvl1Status ?? true 
  },
  // {
  //   id: 2,
  //   image: lvlImg2,
  //   heading: "Level 2",
  //   description: "Understanding how the web works",
  //   bgcolor: "#688DE2",
  //   url: "lvl2",
  //   lock: lvl2Status ?? true 
  // },
  // {
  //   id: 3,
  //   image: lvlImg3,
  //   heading: "Level 3",
  //   description: "Polish your profile and ace interviews",
  //   bgcolor: "#FDD549",
  //   url: "lvl3",
  //   lock: lvl3Status ?? true 
  // },
  // {
  //   id: 4,
  //   image: lvlImg1,
  //   heading: "Level 4",
  //   description: "Mastering a domain for you",
  //   bgcolor: "#B56FCF",
  //   url: "lvl4",
  //   lock: lvl4Status ?? true 
  // },
];

export default data;
