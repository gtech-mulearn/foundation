// data.ts
import lvlImg1 from "../../assets/LevelInfo/lvl1-img.svg";
import lvlImg2 from "../../assets/LevelInfo/lvl2-img.svg";
import lvlImg3 from "../../assets/LevelInfo/lvl3-img.svg";
import lvlImg4 from "../../assets/LevelInfo/lvl4-img.svg";

export interface DataItem {
  id: number;
  image: string;
  heading: string;
  description: string;
  bgcolor: string;
  url:string
}

const data: DataItem[] = [
  {
    id: 1,
    image: lvlImg4,
    heading: "Week 0",
    description: "Analyse, visualise, choose tools",
    bgcolor: "#F36B37",
    url:"lvl1"
  },
  // {
  //   id: 2,
  //   image: lvlImg2,
  //   heading: "Level 2",
  //   description: "Understanding how the web works",
  //   // description: "Locked",
  //   bgcolor: "#688DE2",
  //   url:"lvl2"
  // },
  // {
  //   id: 3,
  //   image: lvlImg3,
  //   heading: "Level 3",
  //   description: "Polish your profile and ace interviews",
  //   bgcolor: "#FDD549",
  //   url:"lvl3"
  // },
  // {
  //   id: 4,
  //   image: lvlImg1,
  //   heading: "Level 4",
  //   description: "Mastering a domain for you",
  //   bgcolor: "#B56FCF ",
  //   url:"lvl4"
  // },
];

export default data;
