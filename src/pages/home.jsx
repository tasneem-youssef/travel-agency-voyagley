import TopDestinations from "../components/TopDestinations"
import Trending from "../components/Trending"
import TripSelector from "../components/tripSelector"
import video1 from "../images/vedio1.mp4"
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

       <TopDestinations/>

       <Trending/>
       </div>
    )
}
export default Home