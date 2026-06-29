import { Link } from "react-router-dom";
import { TripsData } from "../components/trips/TripsLayout";
import SubPageHeader from "../components/subPageHeader.jsx";
import bannerImg from "../images/tripsHeader.jpg";

const Trips = () => {
    return (
        <div className="trips-page-container">
            <SubPageHeader
                imagePath={bannerImg}
                title="Our Trips"
                subtitle="Explore our curated collection of extraordinary journeys"
            />

            <div className="trips-grid-wrapper">
                <div className="trips-grid">
                    {Object.values(TripsData).map((trip, i) => (
                        <div className="trip-card" key={i}>
                            <div className="trip-card-image-wrapper">
                                <img src={trip.image} alt={trip.title} className="trip-card-image" />
                            </div>
                            <div className="trip-card-content">
                                <span className="trip-card-subtitle">{trip.subtitle}</span>
                                <h3 className="trip-card-title">{trip.title}</h3>
                                <div className="trip-card-footer">
                                    <span className="trip-card-price">{trip.price}</span>
                                    <Link className="trip-card-link" to={`/trips/trip${i + 1}`}>
                                        View Trip
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
export default Trips;