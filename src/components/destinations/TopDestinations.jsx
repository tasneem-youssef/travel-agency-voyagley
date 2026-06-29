import { Link } from "@mui/joy";
const TopDestinations = () => {
  return (
    <div id="destinations" className="topDestinations">
      <h2 className="component-title">top destinations</h2>
      <div className="destinations-container">
        <div className="destination-item des1">
          <div className="desItem-title ">United Kingdom</div>
          <ul className="desItem-list">
            <li>30 hotels</li>
            <li>35 trips</li>
            <li>12 destinations</li>
          </ul>
        </div>
        <div className="destination-item des2">
          <div className="desItem-title ">france</div>
          <ul className="desItem-list">
            <li>30 hotels</li>
            <li>35 trips</li>
            <li>12 destinations</li>
          </ul></div>
        <div className="destination-item des3">
          <div className="desItem-title ">Greece</div>
          <ul className="desItem-list">
            <li>30 hotels</li>
            <li>35 trips</li>
            <li>12 destinations</li>
          </ul>
        </div>
        <div className="destination-item des4">
          <div className="desItem-title ">india</div>
          <ul className="desItem-list">
            <li>30 hotels</li>
            <li>35 trips</li>
            <li>12 destinations</li>
          </ul>
        </div>
        <div className="destination-item des5">
          <div className="desItem-title ">Italy</div>
          <ul className="desItem-list">
            <li>30 hotels</li>
            <li>35 trips</li>
            <li>12 destinations</li>
          </ul>
        </div>
        <div className="destination-item des6">
          <div className="desItem-title ">Turkey</div>
          <ul className="desItem-list">
            <li>30 hotels</li>
            <li>35 trips</li>
            <li>12 destinations</li>
          </ul>
        </div>
      </div>
      <a className="pageLink" href="/travel-agency-voyagley/destinations">show more...</a>
    </div>
  );
};
export default TopDestinations;
