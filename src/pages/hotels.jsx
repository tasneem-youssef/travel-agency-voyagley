import { Link } from "react-router-dom";
import { HotelsData } from "../components/hotels/HotelsLayout";
import SubPageHeader from "../components/subPageHeader.jsx";
import bannerImg from "../images/hotelsHeader.jpg";

const Hotels = () => {
    return (
        <div className="trips-page-container">
            <SubPageHeader
                imagePath={bannerImg}
                title="Our Hotels"
                subtitle="Explore our curated collection of extraordinary hotels"
            />

            <div className="trips-grid-wrapper">
                <div className="trips-grid">
                    {Object.values(HotelsData).map((hotel, i) => (
                        <div className="trip-card" key={i}>
                            <div className="trip-card-image-wrapper">
                                <img src={hotel.image} alt={hotel.name} className="trip-card-image" />
                            </div>
                            <div className="trip-card-content">
                                <h3 className="trip-card-title">{hotel.name}</h3>
                                <span className="trip-card-subtitle">{hotel.location}</span>
                                <div className="trip-card-footer">
                                    <span className="trip-card-price">{hotel.pricePerNight} <span className="trip-card-subtitle">/ night</span></span>
                                    <Link className="trip-card-link" to={`/hotels/hotel${i + 1}`}>
                                        View Hotel
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
export default Hotels;