import "../../index.css";
import { FaUserTie, FaCalendarAlt, FaClock, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import ReservationButton from "../ReservationButton";

const TripDetailContent = ({ trip }) => {
    if (!trip) return null;

    return (
        <section className="trip-detail-section">

            {/* Breadcrumb */}
            <div className="trip-breadcrumb">
                <a href="/trips" className="trip-bc-link">Trips</a>
                <span className="trip-bc-sep">›</span>
                <span className="trip-bc-current">{trip.title}</span>
            </div>

            {/* Main two-column layout */}
            <div className="trip-detail-grid">

                {/* LEFT – narrative + highlights */}
                <div className="trip-detail-main">

                    <span className="trip-eyebrow">{trip.subtitle}</span>
                    <h2 className="trip-detail-heading">{trip.title}</h2>

                    {/* Historical overview */}
                    <div className="trip-history-block">
                        <h3 className="trip-block-title">Historical Overview</h3>
                        <p className="trip-history-text">{trip.history}</p>
                    </div>

                    {/* Trip highlights */}
                    <div className="trip-highlights-block">
                        <h3 className="trip-block-title">Trip Highlights</h3>
                        <ul className="trip-highlights-list">
                            {trip.highlights.map((h, i) => (
                                <li key={i} className="trip-highlight-item">
                                    <span className="trip-highlight-dot" />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT – info card + reservation */}
                <aside className="trip-detail-sidebar">
                    <div className="trip-info-card">

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaUserTie /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Trip Leader</span>
                                <span className="trip-info-value">{trip.leader}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaCalendarAlt /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Departure Date</span>
                                <span className="trip-info-value">{trip.date}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaClock /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Duration</span>
                                <span className="trip-info-value">{trip.duration}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaUsers /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Available Spots</span>
                                <span className="trip-info-value trip-spots">
                                    {trip.availableSpots} remaining
                                    {trip.availableSpots <= 5 && (
                                        <span className="trip-spots-badge">Almost full!</span>
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaMapMarkerAlt /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Destination</span>
                                <span className="trip-info-value">{trip.subtitle}</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="trip-price-block">
                            <span className="trip-price-label">Price per person</span>
                            <span className="trip-price-value">{trip.price}</span>
                        </div>

                        {/* Reservation CTA */}
                        <ReservationButton
                            name={trip.title}
                            date={trip.date}
                            buttonLabel="Reserve Your Spot"
                            noteText="Free cancellation up to 30 days before departure"
                            buttonId={`reserve-${trip.title.toLowerCase().replace(/\s/g, "-")}`}
                        />

                        <p className="trip-reserve-note">
                            Free cancellation up to 30 days before departure
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default TripDetailContent;
