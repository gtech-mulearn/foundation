import scratchImg from "../../assets/TaskInfo/scratch.svg"
import cmdImg from "../../assets/TaskInfo/commandline.svg"
import gitImg from "../../assets/TaskInfo/gitgithub.svg"
import jsImg from "../../assets/TaskInfo/javascript.svg"
import apiImg from "../../assets/TaskInfo/api.svg"
export interface DataItem {
    id: number;
    image: string;
    heading: string;
    description: string;
    bgcolor: string;
    txtcolor:string;
  }
  
  const data: DataItem[] = [
    {
      id: 1,
      image: scratchImg,
      heading: "TASK 1",
      description: "Build your own story using Scratch",
      bgcolor: "#688DE2",
      txtcolor:"#000",
    },
    {
      id: 2,
      image: cmdImg,
      heading: "TASK 2",
      description: "Knowing this skill is a green flag",
      bgcolor: "#191C1F",
      txtcolor:"#F4F4F4",
    },
    {
      id: 3,
      image: gitImg,
      heading: "TASK 3",
      description: "Create your dream portfolio here",
      bgcolor: "#7225F2",
      txtcolor:"#F4F4F4",
    },
    {
      id: 4,
      image: jsImg,
      heading: "TASK 4",
      description: "Build a calculator for fun",
      bgcolor: "#fdd649de",
      txtcolor:"#000",
    },
    {
      id: 5,
      image:apiImg,
      heading: "TASK 5",
      description: "Key skill to all your skills",
      bgcolor: "#f66a37d9",
      txtcolor:"#000",
    },
    
  ];
  
  export default data;
  