import { useState, useRef } from "react";
import "./Auth.css";

const Auth = () => {
    const [mode, setMode] = useState("login"); // "login" | "signup"
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    /* ── form states ── */
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        image: null,
    });
    const [showLoginPw, setShowLoginPw] = useState(false);
    const [showSignupPw, setShowSignupPw] = useState(false);
    const [showConfirmPw, setShowConfirmPw] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    /* ── helpers ── */
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setSignupData((prev) => ({ ...prev, image: file }));
        const reader = new FileReader();
        reader.onloadend = () => setPreviewUrl(reader.result);
        reader.readAsDataURL(file);
    };

    const validateLogin = () => {
        const errs = {};
        if (!loginData.email) errs.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(loginData.email)) errs.email = "Invalid email";
        if (!loginData.password) errs.password = "Password is required";
        return errs;
    };

    const validateSignup = () => {
        const errs = {};
        if (!signupData.firstName.trim()) errs.firstName = "First name is required";
        if (!signupData.lastName.trim()) errs.lastName = "Last name is required";
        if (!signupData.email) errs.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(signupData.email)) errs.email = "Invalid email";
        if (!signupData.phone) errs.phone = "Phone number is required";
        else if (!/^\+?[0-9\s\-()]{7,15}$/.test(signupData.phone))
            errs.phone = "Invalid phone number";
        if (!signupData.password) errs.password = "Password is required";
        else if (signupData.password.length < 8)
            errs.password = "At least 8 characters";
        if (!signupData.confirmPassword)
            errs.confirmPassword = "Please confirm your password";
        else if (signupData.password !== signupData.confirmPassword)
            errs.confirmPassword = "Passwords do not match";
        return errs;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const errs = validateLogin();
        setErrors(errs);
        if (Object.keys(errs).length === 0) setSubmitted(true);
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const errs = validateSignup();
        setErrors(errs);
        if (Object.keys(errs).length === 0) setSubmitted(true);
    };

    const switchMode = (m) => {
        setMode(m);
        setErrors({});
        setSubmitted(false);
    };

    /* ── render ── */
    return (
        <div className="auth-page">

            <div className="auth-card">
                {/* ── left panel ── */}
                <div className="auth-panel auth-panel--left">
                    <div className="auth-panel-inner">
                        <div className="auth-brand">
                            {/*  <span className="auth-brand-dot" /> */}
                            <span className="auth-brand-name">Voyagley</span>
                        </div>
                        <h2 className="auth-tagline">
                            Your next adventure<br />starts here
                        </h2>
                        <p className="auth-desc">
                            Join thousands of explorers and unlock exclusive deals on trips,
                            hotels, and unforgettable experiences worldwide.
                        </p>
                        <ul className="auth-perks">
                            <li className="auth-perk">
                                <span className="auth-perk-icon">🌍</span>
                                <span>200+ destinations</span>
                            </li>
                            <li className="auth-perk">
                                <span className="auth-perk-icon">🏷️</span>
                                <span>Exclusive member deals</span>
                            </li>
                            <li className="auth-perk">
                                <span className="auth-perk-icon">🛎️</span>
                                <span>24 / 7 concierge support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── right panel ── */}
                <div className="auth-panel auth-panel--right">
                    {submitted ? (
                        <div className="auth-success">
                            <div className="auth-success-icon">🎉</div>
                            <h2 className="auth-success-title">
                                {mode === "login" ? "Welcome back!" : "Account created!"}
                            </h2>
                            <p className="auth-success-sub">
                                {mode === "login"
                                    ? "You have successfully logged in."
                                    : "Your account has been created successfully."}
                            </p>
                            <button
                                className="auth-btn auth-btn--primary"
                                onClick={() => setSubmitted(false)}
                            >
                                Continue
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* toggle */}
                            <div className="auth-toggle" role="tablist">
                                <button
                                    id="tab-login"
                                    role="tab"
                                    aria-selected={mode === "login"}
                                    className={`auth-toggle-btn${mode === "login" ? " auth-toggle-btn--active" : ""}`}
                                    onClick={() => switchMode("login")}
                                >
                                    Log In
                                </button>
                                <button
                                    id="tab-signup"
                                    role="tab"
                                    aria-selected={mode === "signup"}
                                    className={`auth-toggle-btn${mode === "signup" ? " auth-toggle-btn--active" : ""}`}
                                    onClick={() => switchMode("signup")}
                                >
                                    Sign Up
                                </button>
                                <span
                                    className="auth-toggle-slider"
                                    aria-hidden="true"
                                    style={{ transform: mode === "signup" ? "translateX(100%)" : "translateX(0)" }}
                                />
                            </div>

                            {/* ─── LOGIN FORM ─── */}
                            {mode === "login" && (
                                <form
                                    className="auth-form"
                                    id="login-form"
                                    onSubmit={handleLoginSubmit}
                                    noValidate
                                >
                                    <div className="auth-form-header">
                                        <h1 className="auth-form-title">Welcome back</h1>
                                        <p className="auth-form-sub">Sign in to your account</p>
                                    </div>

                                    <div className="auth-field">
                                        <label className="auth-label" htmlFor="login-email">
                                            Email address
                                        </label>
                                        <div className="auth-input-wrap">
                                            <span className="auth-input-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                            </span>
                                            <input
                                                id="login-email"
                                                type="email"
                                                className={`auth-input${errors.email ? " auth-input--error" : ""}`}
                                                placeholder="you@example.com"
                                                value={loginData.email}
                                                onChange={(e) =>
                                                    setLoginData((p) => ({ ...p, email: e.target.value }))
                                                }
                                                autoComplete="email"
                                            />
                                        </div>
                                        {errors.email && (
                                            <span className="auth-error">{errors.email}</span>
                                        )}
                                    </div>

                                    <div className="auth-field">
                                        <label className="auth-label" htmlFor="login-password">
                                            Password
                                        </label>
                                        <div className="auth-input-wrap">
                                            <span className="auth-input-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                            </span>
                                            <input
                                                id="login-password"
                                                type={showLoginPw ? "text" : "password"}
                                                className={`auth-input${errors.password ? " auth-input--error" : ""}`}
                                                placeholder="Your password"
                                                value={loginData.password}
                                                onChange={(e) =>
                                                    setLoginData((p) => ({ ...p, password: e.target.value }))
                                                }
                                                autoComplete="current-password"
                                            />
                                            <button
                                                type="button"
                                                className="auth-pw-toggle"
                                                aria-label="Toggle password visibility"
                                                onClick={() => setShowLoginPw((v) => !v)}
                                            >
                                                {showLoginPw ? (
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                                        <line x1="1" y1="1" x2="23" y2="23" />
                                                    </svg>
                                                ) : (
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <span className="auth-error">{errors.password}</span>
                                        )}
                                    </div>

                                    <div className="auth-extras">
                                        <label className="auth-remember">
                                            <input
                                                type="checkbox"
                                                id="remember-me"
                                                className="auth-checkbox"
                                            />
                                            <span>Remember me</span>
                                        </label>
                                        <button type="button" className="auth-forgot">
                                            Forgot password?
                                        </button>
                                    </div>

                                    <button type="submit" className="auth-btn auth-btn--primary" id="login-submit">
                                        <span>Log In</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    <p className="auth-switch-text">
                                        Don&apos;t have an account?{" "}
                                        <button
                                            type="button"
                                            className="auth-switch-link"
                                            onClick={() => switchMode("signup")}
                                        >
                                            Sign up free
                                        </button>
                                    </p>
                                </form>
                            )}

                            {/* ─── SIGNUP FORM ─── */}
                            {mode === "signup" && (
                                <form
                                    className="auth-form auth-form--signup"
                                    id="signup-form"
                                    onSubmit={handleSignupSubmit}
                                    noValidate
                                >
                                    <div className="auth-form-header">
                                        <h1 className="auth-form-title">Create account</h1>
                                        <p className="auth-form-sub">Start your journey today</p>
                                    </div>

                                    {/* avatar upload */}
                                    <div className="auth-avatar-wrap">
                                        <div
                                            className="auth-avatar"
                                            onClick={() => fileInputRef.current.click()}
                                            role="button"
                                            tabIndex={0}
                                            aria-label="Upload profile photo"
                                            onKeyDown={(e) => e.key === "Enter" && fileInputRef.current.click()}
                                        >
                                            {previewUrl ? (
                                                <img
                                                    src={previewUrl}
                                                    alt="Profile preview"
                                                    className="auth-avatar-img"
                                                />
                                            ) : (
                                                <div className="auth-avatar-placeholder">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>
                                                    <span>Upload photo</span>
                                                </div>
                                            )}
                                            <div className="auth-avatar-overlay">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="17 8 12 3 7 8" />
                                                    <line x1="12" y1="3" x2="12" y2="15" />
                                                </svg>
                                            </div>
                                        </div>
                                        <input
                                            ref={fileInputRef}
                                            id="profile-image"
                                            type="file"
                                            accept="image/*"
                                            className="auth-file-input"
                                            onChange={handleImageChange}
                                        />
                                        <p className="auth-avatar-hint">
                                            {signupData.image ? signupData.image.name : "JPG, PNG or GIF · Max 5 MB"}
                                        </p>
                                    </div>

                                    {/* name row */}
                                    <div className="auth-row">
                                        <div className="auth-field">
                                            <label className="auth-label" htmlFor="signup-firstname">
                                                First name
                                            </label>
                                            <div className="auth-input-wrap">
                                                <span className="auth-input-icon">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>
                                                </span>
                                                <input
                                                    id="signup-firstname"
                                                    type="text"
                                                    className={`auth-input${errors.firstName ? " auth-input--error" : ""}`}
                                                    placeholder="John"
                                                    value={signupData.firstName}
                                                    onChange={(e) =>
                                                        setSignupData((p) => ({ ...p, firstName: e.target.value }))
                                                    }
                                                    autoComplete="given-name"
                                                />
                                            </div>
                                            {errors.firstName && (
                                                <span className="auth-error">{errors.firstName}</span>
                                            )}
                                        </div>

                                        <div className="auth-field">
                                            <label className="auth-label" htmlFor="signup-lastname">
                                                Last name
                                            </label>
                                            <div className="auth-input-wrap">
                                                <span className="auth-input-icon">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>
                                                </span>
                                                <input
                                                    id="signup-lastname"
                                                    type="text"
                                                    className={`auth-input${errors.lastName ? " auth-input--error" : ""}`}
                                                    placeholder="Doe"
                                                    value={signupData.lastName}
                                                    onChange={(e) =>
                                                        setSignupData((p) => ({ ...p, lastName: e.target.value }))
                                                    }
                                                    autoComplete="family-name"
                                                />
                                            </div>
                                            {errors.lastName && (
                                                <span className="auth-error">{errors.lastName}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* email */}
                                    <div className="auth-field">
                                        <label className="auth-label" htmlFor="signup-email">
                                            Email address
                                        </label>
                                        <div className="auth-input-wrap">
                                            <span className="auth-input-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                            </span>
                                            <input
                                                id="signup-email"
                                                type="email"
                                                className={`auth-input${errors.email ? " auth-input--error" : ""}`}
                                                placeholder="you@example.com"
                                                value={signupData.email}
                                                onChange={(e) =>
                                                    setSignupData((p) => ({ ...p, email: e.target.value }))
                                                }
                                                autoComplete="email"
                                            />
                                        </div>
                                        {errors.email && (
                                            <span className="auth-error">{errors.email}</span>
                                        )}
                                    </div>

                                    {/* phone */}
                                    <div className="auth-field">
                                        <label className="auth-label" htmlFor="signup-phone">
                                            Phone number
                                        </label>
                                        <div className="auth-input-wrap">
                                            <span className="auth-input-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                            </span>
                                            <input
                                                id="signup-phone"
                                                type="tel"
                                                className={`auth-input${errors.phone ? " auth-input--error" : ""}`}
                                                placeholder="+1 (555) 000-0000"
                                                value={signupData.phone}
                                                onChange={(e) =>
                                                    setSignupData((p) => ({ ...p, phone: e.target.value }))
                                                }
                                                autoComplete="tel"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <span className="auth-error">{errors.phone}</span>
                                        )}
                                    </div>

                                    {/* password */}
                                    <div className="auth-field">
                                        <label className="auth-label" htmlFor="signup-password">
                                            Password
                                        </label>
                                        <div className="auth-input-wrap">
                                            <span className="auth-input-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                            </span>
                                            <input
                                                id="signup-password"
                                                type={showSignupPw ? "text" : "password"}
                                                className={`auth-input${errors.password ? " auth-input--error" : ""}`}
                                                placeholder="Min. 8 characters"
                                                value={signupData.password}
                                                onChange={(e) =>
                                                    setSignupData((p) => ({ ...p, password: e.target.value }))
                                                }
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                className="auth-pw-toggle"
                                                aria-label="Toggle password visibility"
                                                onClick={() => setShowSignupPw((v) => !v)}
                                            >
                                                {showSignupPw ? (
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                                        <line x1="1" y1="1" x2="23" y2="23" />
                                                    </svg>
                                                ) : (
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <span className="auth-error">{errors.password}</span>
                                        )}
                                        {/* strength bar */}
                                        {signupData.password.length > 0 && (
                                            <div className="auth-strength">
                                                <div
                                                    className={`auth-strength-bar auth-strength-bar--${signupData.password.length < 6
                                                        ? "weak"
                                                        : signupData.password.length < 10
                                                            ? "medium"
                                                            : "strong"
                                                        }`}
                                                />
                                                <span className="auth-strength-label">
                                                    {signupData.password.length < 6
                                                        ? "Weak"
                                                        : signupData.password.length < 10
                                                            ? "Medium"
                                                            : "Strong"}
                                                </span>
                                            </div>
                                        )}
                                    </div>


                                    <button
                                        type="submit"
                                        className="auth-btn auth-btn--primary"
                                        id="signup-submit"
                                    >
                                        <span>Create Account</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    <p className="auth-switch-text">
                                        Already have an account?{" "}
                                        <button
                                            type="button"
                                            className="auth-switch-link"
                                            onClick={() => switchMode("login")}
                                        >
                                            Log in
                                        </button>
                                    </p>
                                </form>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;