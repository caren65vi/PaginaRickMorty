import "./Home.css";
import Antagonists from "../../Components/Antagonists/Antagonists";
import Protagonists from "../../Components/Protagonists/Protagonists";
import Seasons from "../../Components/Seasons/Seasons";
import { SerialInformation } from "../../Components/SerialInformation/SerialInformation";
import HomeNavigator from "../../Components/HomeNavigator/HomeNavigator";
import Gallery from "../../Components/Gallery/Gallery";

const Home = () => {
  return (
    <div className="home-page">
      <HomeNavigator />
      <div id="serial-info">
        <SerialInformation />
      </div>
      <hr className="home-sectionDivider" aria-hidden />
      <div id="protagonists">
        <Protagonists />
      </div>
      <div id="antagonists">
        <Antagonists />
      </div>
      <hr className="home-sectionDivider" aria-hidden />
      <div id="seasons">
        <Seasons />

      </div>
      <hr className="home-sectionDivider" aria-hidden />
      <div className="gallery" aria-hidden>
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
