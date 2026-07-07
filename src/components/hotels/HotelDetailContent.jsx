import "../../index.css";
import { FaStar, FaMapMarkerAlt, FaConciergeBell, FaWifi, FaSwimmingPool } from "react-icons/fa";
import ReservationButton from "../ReservationButton";

const HotelDetailContent = ({ hotel }) => {
    if (!hotel) return null;

    return (
        <section className="trip-detail-section">

            {/* Breadcrumb */}
            <div className="trip-breadcrumb">
                <a href="/hotels" className="trip-bc-link">Hotels</a>
                <span className="trip-bc-sep">›</span>
                <span className="trip-bc-current">{hotel.name}</span>
            </div>

            {/* Main two-column layout */}
            <div className="trip-detail-grid">

                {/* LEFT – description + amenities */}
                <div className="trip-detail-main">

                    <span className="trip-eyebrow">{hotel.location}</span>
                    <h2 className="trip-detail-heading">{hotel.name}</h2>

                    {/* About */}
                    <div className="trip-history-block">
                        <h3 className="trip-block-title">About the Hotel</h3>
                        <p className="trip-history-text">{hotel.description}</p>
                    </div>

                    {/* Amenities */}
                    <div className="trip-highlights-block">
                        <h3 className="trip-block-title">Featured Amenities</h3>
                        <ul className="trip-highlights-list">
                            {hotel.amenities.map((a, i) => (
                                <li key={i} className="trip-highlight-item">
                                    <span className="trip-highlight-dot" />
                                    {a}
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
                                <span className="trip-info-value">{hotel.location}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaStar /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Star Rating</span>
                                <span className="trip-info-value">{hotel.stars} Stars</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaConciergeBell /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Category</span>
                                <span className="trip-info-value">{hotel.category}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaWifi /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Free Wi-Fi</span>
                                <span className="trip-info-value">{hotel.wifi ? "Included" : "Not included"}</span>
                            </div>
                        </div>

                        <div className="trip-info-divider" />

                        <div className="trip-info-row">
                            <span className="trip-info-icon"><FaSwimmingPool /></span>
                            <div className="trip-info-text">
                                <span className="trip-info-label">Pool</span>
                                <span className="trip-info-value">{hotel.pool ? "Available" : "Not available"}</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="trip-price-block">
                            <span className="trip-price-label">Price per night</span>
                            <span className="trip-price-value">{hotel.pricePerNight}</span>
                        </div>

                        {/* Booking CTA */}
                        <ReservationButton
                            name={hotel.name}
                            date=""
                            buttonLabel="Book Now"
                            noteText="Free cancellation within 48 hours of booking"
                            buttonId={`book-${hotel.name.toLowerCase().replace(/\s/g, "-")}`}
                        />

                        <p className="trip-reserve-note">
                            Free cancellation within 48 hours of booking
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default HotelDetailContent;
