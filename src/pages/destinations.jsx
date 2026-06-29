import { Link } from "react-router-dom";
import { DestinationsData } from "../components/destinations/DestinationsLayout";
import SubPageHeader from "../components/subPageHeader.jsx";
import bannerImg from "../images/landescape1.jpg";

const Destinations = () => {
    return (
        <div className="trips-page-container">
            <SubPageHeader
                imagePath={bannerImg}
                title="Our Destinations"
                subtitle="Explore our curated collection of extraordinary destinations"
            />

            <div className="trips-grid-wrapper">
                <div className="trips-grid">
                    {Object.values(DestinationsData).map((destination, i) => (
                        <div className="trip-card" key={i}>
                            <div className="trip-card-image-wrapper">
                                <img src={destination.image} alt={destination.title} className="trip-card-image" />
                            </div>
                            <div className="trip-card-content">
                                <span className="trip-card-subtitle">{destination.subtitle}</span>
                                <h3 className="trip-card-title">{destination.title}</h3>
                                <div className="trip-card-footer">
                                    <span className="trip-card-price">{destination.price}</span>
                                    <Link className="trip-card-link" to={`/destinations/destination${i + 1}`}>
                                        View Destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Destinations;