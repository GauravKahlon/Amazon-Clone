import React from "react";
import "./Footer.css";
import AmazonLogo from "../../Assets/Svg/amazon_logo.png";
import GlobeIcon from "./Svg/globe.png";
import FlagIcon from "../../Assets/Svg/flag.png";

const Footer = () => {
    return (
        <div className="foot-parent-container">
            <div className="foot-background">
                <div className="foot-back-to-top">
                    <span className="foot-back-to-foot-text">Back to top</span>
                </div>
                <div className="foot-content-container">
                    <div className="foot-content-upper">
                        <div className="foot-box1 foot-box-content">
                            <span className="foot-box-heading">Get to Know Us</span>
                            <span className="foot-box-list-items">Careers</span>
                            <span className="foot-box-list-items">Blog</span>
                            <span className="foot-box-list-items">About Amazon</span>
                        </div>
                        <div className="foot-box2 foot-box-content">
                            <span className="foot-box-heading">Site overview</span>
                            <span className="foot-box-list-items">Home</span>
                            <span className="foot-box-list-items">Cart(0)</span>
                            <span className="foot-box-list-items">Contact Us</span>
                        </div>
                        <div className="foot-box3 foot-box-content">
                            <span className="foot-box-heading">Let Us Help You</span>
                            <span className="foot-box-list-items">Your Account</span>
                            <span className="foot-box-list-items">Your Orders</span>
                            <span className="foot-box-list-items">Help</span>
                        </div>
                    </div>
                    <div className="foot-content-lower">
                        <img src={AmazonLogo} alt="Amazon Logo" className="foot-amazon-logo" />
                        <div className="foot-lang-container foot-content-lower-container">
                            <img src={GlobeIcon} alt="Globe icon" className="foot-globe-icon" />
                            <span className="foot-content-lower-text">English</span>
                        </div>
                        <div className="foot-currency-container foot-content-lower-container">
                            <span className="foot-content-lower-text">₹ INR - Indian Rupee</span>
                        </div>
                        <div className="foot-country-container foot-content-lower-container">
                            <img src={FlagIcon} alt="Flag icon" className="foot-flag-icon" />
                            <span className="foot-content-lower-text">India</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
