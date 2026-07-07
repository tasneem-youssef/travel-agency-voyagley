import { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import { FaCalendarAlt, FaUser, FaUsers, FaTag } from "react-icons/fa";
import "../index.css";

const ReservationButton = ({ name, date, buttonLabel, noteText, buttonId }) => {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        tripName: name || "",
        date: date || "",
        persons: 1,
        reservationName: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setOpen(false);
            setForm((prev) => ({ ...prev, persons: 1, reservationName: "" }));
        }, 2000);
    };

    return (
        <>
            <button
                className="trip-reserve-btn"
                id={buttonId}
                onClick={() => setOpen(true)}
            >
                {buttonLabel || "Reserve Your Spot"}
            </button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1300,
                    backdropFilter: "blur(6px)",
                }}
            >
                <Sheet
                    sx={{
                        width: { xs: "92vw", sm: 480 },
                        borderRadius: "20px",
                        padding: "36px 32px 32px",
                        boxShadow: "0 24px 64px rgba(39,134,137,0.22), 0 4px 16px rgba(0,0,0,0.1)",
                        border: "1.5px solid rgba(39,134,137,0.15)",
                        background: "#fff",
                        position: "relative",
                        outline: "none",
                    }}
                >
                    <ModalClose
                        sx={{
                            top: 16,
                            right: 16,
                            color: "var(--turkishJade)",
                        }}
                    />

                    {/* Header */}
                    <div className="res-modal-header">
                        <div className="res-modal-icon-wrap">
                            <FaCalendarAlt />
                        </div>
                        <div>
                            <Typography
                                level="h4"
                                sx={{
                                    fontWeight: 800,
                                    color: "#1a2e2e",
                                    fontSize: "1.35rem",
                                    lineHeight: 1.2,
                                }}
                            >
                                Complete Your Reservation
                            </Typography>
                            <Typography
                                level="body-sm"
                                sx={{ color: "var(--happy-cement)", mt: 0.5 }}
                            >
                                Fill in the details below to secure your spot
                            </Typography>
                        </div>
                    </div>

                    <Divider sx={{ my: 2.5, borderColor: "rgba(39,134,137,0.12)" }} />

                    {submitted ? (
                        <div className="res-modal-success">
                            <div className="res-modal-success-icon">✓</div>
                            <Typography
                                level="h4"
                                sx={{ fontWeight: 700, color: "#1a2e2e", textAlign: "center" }}
                            >
                                Reservation Confirmed!
                            </Typography>
                            <Typography
                                level="body-sm"
                                sx={{ color: "var(--happy-cement)", textAlign: "center", mt: 1 }}
                            >
                                We'll be in touch shortly with your booking details.
                            </Typography>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="res-modal-form">
                            {/* Trip / Item Name */}
                            <FormControl className="res-form-control">
                                <FormLabel className="res-form-label">
                                    <FaTag className="res-label-icon" />
                                    Trip / Package Name
                                </FormLabel>
                                <Input
                                    value={form.tripName}
                                    onChange={handleChange("tripName")}
                                    readOnly
                                    className="res-input res-input-readonly"
                                    sx={{
                                        "--Input-focusedHighlight": "var(--turkishJade)",
                                        borderRadius: "10px",
                                        backgroundColor: "rgba(39,134,137,0.04)",
                                        borderColor: "rgba(39,134,137,0.2)",
                                        fontSize: "0.95rem",
                                        fontWeight: 600,
                                        color: "#1a2e2e",
                                        cursor: "default",
                                    }}
                                />
                            </FormControl>

                            {/* Date */}
                            <FormControl className="res-form-control">
                                <FormLabel className="res-form-label">
                                    <FaCalendarAlt className="res-label-icon" />
                                    Date
                                </FormLabel>
                                <Input
                                    type={date ? "text" : "date"}
                                    value={form.date}
                                    onChange={handleChange("date")}
                                    readOnly={!!date}
                                    required
                                    className={`res-input ${date ? "res-input-readonly" : ""}`}
                                    sx={{
                                        "--Input-focusedHighlight": "var(--turkishJade)",
                                        borderRadius: "10px",
                                        backgroundColor: date
                                            ? "rgba(39,134,137,0.04)"
                                            : "#fff",
                                        borderColor: "rgba(39,134,137,0.2)",
                                        fontSize: "0.95rem",
                                        fontWeight: date ? 600 : 400,
                                        color: "#1a2e2e",
                                        cursor: date ? "default" : "pointer",
                                    }}
                                />
                            </FormControl>

                            {/* Number of Persons */}
                            <FormControl className="res-form-control">
                                <FormLabel className="res-form-label">
                                    <FaUsers className="res-label-icon" />
                                    Number of Persons
                                </FormLabel>
                                <Input
                                    type="number"
                                    value={form.persons}
                                    onChange={handleChange("persons")}
                                    inputProps={{ min: 1, max: 20 }}
                                    slotProps={{ input: { min: 1, max: 20 } }}
                                    required
                                    className="res-input"
                                    sx={{
                                        "--Input-focusedHighlight": "var(--turkishJade)",
                                        borderRadius: "10px",
                                        borderColor: "rgba(39,134,137,0.2)",
                                        fontSize: "0.95rem",
                                        color: "#1a2e2e",
                                    }}
                                />
                            </FormControl>

                            {/* Reservation Name */}
                            <FormControl className="res-form-control">
                                <FormLabel className="res-form-label">
                                    <FaUser className="res-label-icon" />
                                    Reservation Name
                                </FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter full name"
                                    value={form.reservationName}
                                    onChange={handleChange("reservationName")}
                                    required
                                    className="res-input"
                                    sx={{
                                        "--Input-focusedHighlight": "var(--turkishJade)",
                                        borderRadius: "10px",
                                        borderColor: "rgba(39,134,137,0.2)",
                                        fontSize: "0.95rem",
                                        color: "#1a2e2e",
                                    }}
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                fullWidth
                                className="res-submit-btn"
                                sx={{
                                    mt: 1,
                                    padding: "14px",
                                    background: "linear-gradient(135deg, var(--turkishJade), var(--lagoon))",
                                    borderRadius: "12px",
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                    letterSpacing: "0.5px",
                                    border: "none",
                                    color: "#fff",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, var(--turkishJade), var(--lagoon))",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 8px 24px rgba(39,134,137,0.35)",
                                        opacity: 0.92,
                                    },
                                    "&:active": {
                                        transform: "translateY(0)",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                Confirm Reservation
                            </Button>
                        </form>
                    )}
                </Sheet>
            </Modal>
        </>
    );
};

export default ReservationButton;
