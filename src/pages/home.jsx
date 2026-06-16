import TopDestinations from "../components/TopDestinations";
import Trending from "../components/Trending";
import TripSelector from "../components/tripSelector";
import video1 from "../images/vedio1.mp4";
import Break from "../images/seperate wallpaper.jpg";
import BackToTop from "../components/backToTop.jsx";
import WhyUs from "../components/WhyUs.jsx";
import TopDeals from "../components/TopDeals.jsx";

const Home = () => {
  return (
    <div className="Home">
      <video autoPlay loop muted className="home-video">
        <source src={video1} />
      </video>
      <div className="home-text">
        <h1 className="boldonse-regular">Adventure starts here</h1>
      </div>
      <TripSelector />
      <TopDestinations />
      <Trending />
      <BackToTop />
      <div className="break">
        <img src={Break} />
        <div className="herodiv">
          <h3>quick info</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a
            libero delectus dicta quo, iure laudantium obcaecati facere ab fuga
            debitis commodi, corporis consectetur cum tenetur illum
            reprehenderit distinctio eaque.
          </span>
          <div className="herobtn">book now</div>
        </div>
      </div>
      <WhyUs />
      <TopDeals/>
    </div>
  );
};
export default Home;
