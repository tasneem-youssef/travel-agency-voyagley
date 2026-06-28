import "../../index.css";
import { FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaTicketAlt } from "react-icons/fa";

const ActivityDetailContent = ({ activity }) => {
    if (!activity) return null;

    return (
        <section className="trip-detail-section">

            {/* Breadcrumb */}
            <div className="trip-breadcrumb">
                <a href="/activities" className="trip-bc-link">Activities</a>
                <span className="trip-bc-sep">›</span>
                <span className="trip-bc-current">{activity.title}</span>
            </div>

            {/* Main two-column layout */}
            <div className="trip-detail-grid">

                {/* LEFT – description + what's included */}
                <div className="trip-detail-main">

                    <span className="trip-eyebrow">{activity.location}</span>
                    <h2 className="trip-detail-heading">{activity.title}</h2>

                    {/* About */}
                    <div className="trip-history-block">
                        <h3 className="trip-block-title">About This Activity</h3>
                        <p className="trip-history-text">{activity.description}</p>
                    </div>

                    {/* What's included */}
                    <div className="trip-highlights-block">
                        <h3 className="trip-block-title">What's Included</h3>
                        <ul className="trip-highlights-list">
                            {activity.included.map((item, i) => (
                                <li key={i} className="trip-highlight-item">
                                    <span className="trip-highlight-dot" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT – info card */}
                <aside className="trip-detail-sidebar">
                    <div className="trip-info-card">

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaMapMarkerAlt /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Location</span>
                                <span className="trip-info-value">{activity.location}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaClock /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Duration</span>
                                <span className="trip-info-value">{activity.duration}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaUsers /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Group Size</span>
                                <span className="trip-info-value">Up to {activity.groupSize} people</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaStar /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Category</span>
                                <span className="trip-info-value">{activity.category}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaTicketAlt /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Availability</span>
                                <span className="trip-info-value trip-spots">
                                    {activity.availableSpots} spots left
                                    {activity.availableSpots <= 5 && (
                                        <span className="trip-spots-badge">Almost full!</span>
                                    )}
                                </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="trip-price-block">
                            <span className="trip-price-label">Price per person</span>
                            <span className="trip-price-value">{activity.price}</span>
                        </div>

                        {/* Booking CTA */}
                        <button
                            className="trip-reserve-btn"
                            id={`book-${activity.title.toLowerCase().replace(/\s/g, "-")}`}
                        >
                            Reserve Your Spot
                        </button>

                        <p className="trip-reserve-note">
                            Free cancellation up to 24 hours before the activity
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default ActivityDetailContent;
