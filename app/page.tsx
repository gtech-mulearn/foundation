import TaskInfo from "@/modules/TaskInfo/TaskInfo";
import Landingpage from "../modules/LandingPage/landing";
import LevelInfo from "../modules/LevelInfo/levelInfo";
import WallOfFame from "@/modules/WallOfFame/WallOfFame";
export default function Home() {
  return (
    <main>
      <Landingpage />
      <LevelInfo />
      <TaskInfo />
      <WallOfFame />
    </main>
  );
}
