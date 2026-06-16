import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook, FaPhone, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaGooglePay } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";





const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer pt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 text-center text-md-start">
                            <h3 className="mb-4">Company</h3>
                            <div className="d-flex flex-column align-items-center align-items-md-start">
                                <a className="btn btn-link px-0 py-1" href="/">Home</a>
                                <a className="btn btn-link px-0 py-1" href="#">About Us</a>
                                <a className="btn btn-link px-0 py-1" href="#">Contact Us</a>
                                <a className="btn btn-link px-0 py-1" href="#">Privacy Policy</a>
                                <a className="btn btn-link px-0 py-1" href="#">Terms & Condition</a>
                                <a className="btn btn-link px-0 py-1" href="#">FAQs & Help</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center text-md-start">
                            <h3 className="mb-4">Contact</h3>
                            <p className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                                <FaMapMarkerAlt className="flex-shrink-0" style={{ fontSize: "1.5rem", color: "#278489", marginRight: "10px" }} />
                                <span>123 Street, New York, USA</span>
                            </p>
                            <p className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                                <FaPhone className="flex-shrink-0" style={{ fontSize: "1.5rem", color: "#278489", marginRight: "10px" }} />
                                <span>+012 345 67890</span>
                            </p>
                            <p className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start">
                                <MdOutlineAlternateEmail className="flex-shrink-0" style={{ fontSize: "1.5rem", color: "#278489", marginRight: "10px" }} />
                                <span>voyagley@outlook.com</span>
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start pt-2">
                                <a className="btn btn-social" href=""><FaFacebook className="social-icon" /></a>
                                <a className="btn btn-social" href=""><IoLogoYoutube className="social-icon" /></a>
                                <a className="btn btn-social" href=""><FaLinkedin className="social-icon" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 text-center text-lg-start">
                            <h3 className="mb-4">Newsletter</h3>
                            <p>subscribe for the latest deals , offers and news.</p>
                            <div className="position-relative mx-auto mx-lg-0 email-input" style={{ maxWidth: "400px" }}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="subscribeBTN py-2 text-white position-absolute top-0 end-0 mt-2 me-2">subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment & Localization Section */}
                <div className="container py-4 my-2 border-top border-bottom border-light-subtle">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
                        {/* Payment Logos */}
                        <div className="d-flex align-items-center flex-wrap justify-content-center gap-3 payment-icons">
                            <span className="text-secondary fw-semibold">We accept:</span>
                            <FaCcVisa title="Visa" />
                            <FaCcMastercard title="Mastercard" />
                            <FaCcPaypal title="PayPal" />
                            <FaCcApplePay title="Apple Pay" />
                            <FaGooglePay title="Google Pay" />
                        </div>
                        {/* Selectors */}
                        <div className="d-flex gap-3">
                            <select className="form-select footer-select" aria-label="Language Selector" defaultValue="en">
                                <option value="en">English (US)</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                            </select>
                            <select className="form-select footer-select" aria-label="Currency Selector" defaultValue="USD">
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                                <option value="AED">AED (د.إ)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row d-flex align-items-baseline">
                            <div className="rights-text col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="/" className="zain-black footer-logo">
                                    Voyagley
                                </a>, All Right Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    );
};

export default Footer;