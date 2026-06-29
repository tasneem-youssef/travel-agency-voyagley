import { Link } from "react-router-dom";
import { ActivitiesData } from "../components/activities/ActivitiesLayout.jsx";
import SubPageHeader from "../components/subPageHeader.jsx";
import bannerImg from "../images/landescape1.jpg";

const Activities = () => {
    return (
        <div className="trips-page-container">
            <SubPageHeader
                imagePath={bannerImg}
                title="Our Activities"
                subtitle="Explore our curated collection of extraordinary activities"
            />

            <div className="trips-grid-wrapper">
                <div className="trips-grid">
                    {Object.values(ActivitiesData).map((activity, i) => (
                        <div className="trip-card" key={i}>
                            <div className="trip-card-image-wrapper">
                                <img src={activity.image} alt={activity.title} className="trip-card-image" />
                            </div>
                            <div className="trip-card-content">
                                <h3 className="trip-card-title">{activity.title}</h3>
                                <div className="flex justify-between">
                                    <span className="trip-card-subtitle">{activity.location}</span>
                                    <span className="trip-card-subtitle">Available Spots: <span className="trip-card-price">{activity.availableSpots}</span></span>
                                </div>
                                <div className="trip-card-footer">
                                    <span className="trip-card-price">{activity.price}</span>
                                    <Link className="trip-card-link" to={`/activities/activity${i + 1}`}>
                                        View Activity
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
export default Activities;