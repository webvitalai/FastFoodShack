import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    alert("Thank you! You have subscribed for weekly deals.");
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Full Menu", path: "/menu" },
    { name: "Latest Deals", path: "/deals" },
    { name: "Our Story", path: "/our-story" },
    { name: "Find Us", path: "/find-us" },
  ];

  return (
    <>
      <style>{`
        :root {
          --hb-black: #120707;
          --hb-red: #e50914;
          --hb-red-dark: #8f0008;
          --hb-yellow: #ffbf00;
          --hb-cream: #fff7ed;
          --hb-soft: #ffe3d3;
          --hb-muted: #6f4e45;
        }

        .hb-footer {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(229,9,20,.2), transparent 32%),
            radial-gradient(circle at bottom right, rgba(255,191,0,.18), transparent 30%),
            linear-gradient(160deg, #fff7ed, #ffe3d3);
          color: var(--hb-black);
          border-top: 1px solid rgba(229,9,20,.18);
          font-family: "Inter", sans-serif;
        }

        .hb-footer-wrapper {
          max-width: 1320px;
          margin: auto;
          padding: 95px 24px 70px;
          position: relative;
          z-index: 2;
        }

        .hb-top {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
          gap: 55px;
        }

        .hb-brand {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 24px;
          max-width: 100%;
        }

        .hb-brand-logo {
          width: 86px;
          height: 74px;
          min-width: 86px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
          flex-shrink: 0;
        }

        .hb-brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          filter:
            brightness(1.08)
            contrast(1.16)
            saturate(1.12)
            drop-shadow(0 5px 10px rgba(229,9,20,.22));
          transition: .35s ease;
        }

        .hb-brand:hover .hb-brand-logo-img {
          transform: scale(1.06);
        }

        .hb-brand-text {
          font-size: 38px;
          font-weight: 950;
          color: var(--hb-black);
          line-height: 1;
          letter-spacing: -1px;
          margin-left: -3px;
        }

        .hb-brand-text span {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark), var(--hb-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hb-tagline {
          color: var(--hb-red);
          font-size: 18px;
          font-weight: 950;
          margin-bottom: 18px;
        }

        .hb-description {
          color: var(--hb-muted);
          line-height: 1.9;
          font-size: 15px;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .hb-socials {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hb-socials a {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          text-decoration: none;
          color: var(--hb-red);
          font-size: 19px;
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(229,9,20,.16);
          transition: .35s ease;
        }

        .hb-socials a:hover {
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
          color: white;
          transform: translateY(-7px) scale(1.08);
          box-shadow: 0 22px 50px rgba(229,9,20,.26);
        }

        .hb-heading {
          font-size: 22px;
          font-weight: 950;
          margin-bottom: 28px;
          position: relative;
        }

        .hb-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -12px;
          width: 58px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--hb-red), var(--hb-yellow));
        }

        .hb-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hb-links li {
          margin-bottom: 16px;
        }

        .hb-links a,
        .hb-links button {
          color: var(--hb-muted);
          text-decoration: none;
          transition: .3s ease;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: none;
          padding: 0;
          font-weight: 700;
        }

        .hb-links a::before,
        .hb-links button::before {
          content: "➜";
          color: var(--hb-red);
          font-size: 12px;
        }

        .hb-links a:hover,
        .hb-links button:hover {
          color: var(--hb-red);
          transform: translateX(8px);
        }

        .hb-contact-box {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 22px;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(229,9,20,.14);
          transition: .3s ease;
        }

        .hb-contact-box:hover {
          transform: translateY(-5px);
          border-color: rgba(229,9,20,.3);
          box-shadow: 0 18px 40px rgba(229,9,20,.12);
        }

        .hb-contact-icon {
          min-width: 46px;
          height: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
          color: white;
          font-size: 18px;
        }

        .hb-contact-box h6 {
          margin: 0 0 4px;
          font-weight: 950;
          font-size: 15px;
        }

        .hb-contact-box p,
        .hb-contact-box a {
          margin: 0;
          color: var(--hb-muted);
          font-size: 14px;
          line-height: 1.7;
          text-decoration: none;
          font-weight: 600;
        }

        .hb-contact-box a:hover {
          color: var(--hb-red);
        }

        .hb-newsletter {
          margin-top: 20px;
          padding: 24px;
          border-radius: 24px;
          background:
            linear-gradient(135deg, rgba(229,9,20,.12), rgba(255,191,0,.16)),
            rgba(255,255,255,.78);
          border: 1px solid rgba(229,9,20,.16);
        }

        .hb-newsletter h5 {
          font-weight: 950;
          margin-bottom: 10px;
        }

        .hb-newsletter p {
          color: var(--hb-muted);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .hb-newsletter-input {
          width: 100%;
          height: 52px;
          border-radius: 16px;
          border: 1px solid rgba(229,9,20,.2);
          background: #fff8f1;
          color: var(--hb-black);
          padding: 0 18px;
          outline: none;
          margin-bottom: 14px;
        }

        .hb-newsletter-input:focus {
          background: white;
          border-color: var(--hb-red);
          box-shadow: 0 0 0 5px rgba(229,9,20,.1);
        }

        .hb-newsletter-btn {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 16px;
          font-weight: 950;
          background: linear-gradient(135deg, var(--hb-red), var(--hb-red-dark));
          color: white;
          transition: .3s ease;
        }

        .hb-newsletter-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(229,9,20,.26);
        }

        .hb-bottom {
          margin-top: 70px;
          padding-top: 28px;
          border-top: 1px solid rgba(229,9,20,.16);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hb-bottom p {
          margin: 0;
          color: var(--hb-muted);
          font-size: 14px;
          font-weight: 600;
        }

        .hb-bottom strong {
          color: var(--hb-red);
        }

        .hb-payments {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hb-payments span {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(229,9,20,.16);
          color: var(--hb-red);
          font-size: 18px;
        }

        @media (max-width: 1100px) {
          .hb-top {
            grid-template-columns: repeat(2,1fr);
          }

          .hb-brand-logo {
            width: 78px;
            height: 68px;
            min-width: 78px;
          }

          .hb-brand-text {
            font-size: 34px;
          }
        }

        @media (max-width: 700px) {
          .hb-footer-wrapper {
            padding: 70px 20px 50px;
          }

          .hb-top {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .hb-brand {
            gap: 5px;
          }

          .hb-brand-logo {
            width: 66px;
            height: 58px;
            min-width: 66px;
          }

          .hb-brand-text {
            font-size: 30px;
            margin-left: -2px;
          }

          .hb-bottom {
            flex-direction: column;
            text-align: center;
          }

          .hb-payments {
            justify-content: center;
          }
        }

        @media (max-width: 390px) {
          .hb-brand-logo {
            width: 58px;
            height: 52px;
            min-width: 58px;
          }

          .hb-brand-text {
            font-size: 25px;
          }
        }
      `}</style>

      <footer className="hb-footer">
        <div className="hb-footer-wrapper">
          <div className="hb-top">
            <div>
              <div className="hb-brand">
                <div className="hb-brand-logo">
                  <img
                    src="/Images/Logo.png"
                    alt="Fast Food Shack Logo"
                    className="hb-brand-logo-img"
                  />
                </div>

                <div className="hb-brand-text">
                  Fast Food<span> Shack</span>
                </div>
              </div>

              <div className="hb-tagline">“Fresh. Spicy. Made To Crave.”</div>

              <p className="hb-description">
                Premium burgers, crispy chicken, loaded fries and flame-grilled
                flavours crafted for true food lovers. Fast delivery, fresh
                ingredients and unforgettable taste.
              </p>

              <div className="hb-socials">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="hb-heading">Quick Links</h4>
              <ul className="hb-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </li>
                ))}

                <li>
                  <button onClick={() => navigate("/menu")}>Order Online</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="hb-heading">Popular Items</h4>
              <ul className="hb-links">
                <li><button onClick={() => navigate("/menu")}>Signature Burgers</button></li>
                <li><button onClick={() => navigate("/menu")}>Loaded Fries</button></li>
                <li><button onClick={() => navigate("/menu")}>Smash Burgers</button></li>
                <li><button onClick={() => navigate("/menu")}>Hot Wings</button></li>
                <li><button onClick={() => navigate("/deals")}>Family Deals</button></li>
                <li><button onClick={() => navigate("/menu")}>Milkshakes</button></li>
              </ul>
            </div>

            <div>
              <h4 className="hb-heading">Contact Us</h4>

              <div className="hb-contact-box">
                <div className="hb-contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6>Location</h6>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=KC%20Fast%20Food%20%26%20Milkshakes%20297%20Bradford%20Rd%20Batley%20WF17%206HY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    George St, Walsall WS1 1RS<br />United Kingdom
                  </a>
                </div>
              </div>

              <div className="hb-contact-box">
                <div className="hb-contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h6>Phone</h6>
                  <a href="tel:+447742600144">+44 7742 600 144</a>
                </div>
              </div>

              <div className="hb-contact-box">
                <div className="hb-contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h6>Email</h6>
                  <a href="mailto:info@fastfoodshack.co.uk">
                    info@fastfoodshack.co.uk
                  </a>
                </div>
              </div>

              <div className="hb-contact-box">
                <div className="hb-contact-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div>
                  <h6>Opening Hours</h6>
                  <p>Mon - Sun · 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <form className="hb-newsletter" onSubmit={handleSubscribe}>
                <h5>Get Weekly Deals</h5>
                <p>Subscribe and receive exclusive food offers and combo deals.</p>

                <input
                  type="email"
                  className="hb-newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" className="hb-newsletter-btn">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          <div className="hb-bottom">
            <p>© 2026 <strong>Fast Food Shack</strong>. All Rights Reserved.</p>

            <div className="hb-payments">
              <span><i className="bi bi-credit-card-fill"></i></span>
              <span><i className="bi bi-paypal"></i></span>
              <span><i className="bi bi-wallet2"></i></span>
              <span><i className="bi bi-apple"></i></span>
            </div>

            <p>Designed with fire. Built for flavour.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;