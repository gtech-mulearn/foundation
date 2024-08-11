import lvlImg1 from "../../assets/LevelInfo/lvl1-img.svg";
import lvlImg2 from "../../assets/LevelInfo/lvl2-img.svg";
import lvlImg3 from "../../assets/LevelInfo/lvl3-img.svg";
import lvlImg4 from "../../assets/LevelInfo/lvl4-img.svg";
import { status } from "../../app/data";

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
    url: "https://mulearnfoundation.notion.site/Assignment-1-Scratch-44f0e3401a7e43cf8c783e3cfe8d8b57",
    lock: false
  },
  {
    id: 2,
    image: lvlImg2,
    heading: "Week 1",
    description: "Introduction to Command Line",
    bgcolor: "#688DE2",
    url: "https://mulearnfoundation.notion.site/Assignment-2-The-Command-Line-Karma-200-3ec9d6e3d3f14ecaa55b223aa4479276",
    lock: false
  },
  {
    id: 3,
    image: lvlImg3,
    heading: "Week 2",
    description: "Getting Started with Git and GitHub",
    bgcolor: "#FDD549",
    url: "https://mulearnfoundation.notion.site/Assignment-3-Git-Github-Karma-400-2352f680f3ac4840a8cedf7e21209478",
    lock: false
  },
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
