import "../../index.css";
import { FaMapMarkerAlt, FaGlobe, FaSun, FaCamera, FaPlane } from "react-icons/fa";
import ReservationButton from "../ReservationButton";

const DestinationDetailContent = ({ destination }) => {
    if (!destination) return null;

    return (
        <section className="trip-detail-section">

            {/* Breadcrumb */}
            <div className="trip-breadcrumb">
                <a href="/destinations" className="trip-bc-link">Destinations</a>
                <span className="trip-bc-sep">›</span>
                <span className="trip-bc-current">{destination.name}</span>
            </div>

            {/* Main two-column layout */}
            <div className="trip-detail-grid">

                {/* LEFT – overview + highlights */}
                <div className="trip-detail-main">

                    <span className="trip-eyebrow">{destination.country}</span>
                    <h2 className="trip-detail-heading">{destination.name}</h2>

                    {/* Overview */}
                    <div className="trip-history-block">
                        <h3 className="trip-block-title">Destination Overview</h3>
                        <p className="trip-history-text">{destination.overview}</p>
                    </div>

                    {/* Top attractions */}
                    <div className="trip-highlights-block">
                        <h3 className="trip-block-title">Top Attractions</h3>
                        <ul className="trip-highlights-list">
                            {destination.attractions.map((attr, i) => (
                                <li key={i} className="trip-highlight-item">
                                    <span className="trip-highlight-dot" />
                                    {attr}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT – info card */}
                <aside className="trip-detail-sidebar">
                    <div className="trip-info-card">

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaGlobe /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Country</span>
                                <span className="trip-info-value">{destination.country}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaMapMarkerAlt /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Region</span>
                                <span className="trip-info-value">{destination.region}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaSun /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Best Time to Visit</span>
                                <span className="trip-info-value">{destination.bestTime}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaCamera /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Known For</span>
                                <span className="trip-info-value">{destination.knownFor}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaPlane /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Avg. Flight Time</span>
                                <span className="trip-info-value">{destination.flightTime}</span>
                            </div>
                        </div>

                        {/* Starting Price */}
                        <div className="trip-price-block">
                            <span className="trip-price-label">Packages starting from</span>
                            <span className="trip-price-value">{destination.startingPrice}</span>
                        </div>

                        {/* Explore CTA */}
                        <ReservationButton
                            name={destination.name}
                            date=""
                            buttonLabel="Explore Packages"
                            noteText="Customisable itineraries available for all budgets"
                            buttonId={`explore-${destination.name.toLowerCase().replace(/\s/g, "-")}`}
                        />

                        <p className="trip-reserve-note">
                            Customisable itineraries available for all budgets
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default DestinationDetailContent;
