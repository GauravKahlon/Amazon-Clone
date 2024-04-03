import React from "react";
import AmazonLogo from "../../Assets/Svg/amazon_logo.png";
import LocationIcon from "./Svg/white_location_icon.png";
import SearchIcon from "./Svg/black_search_icon.png";
import CartIcon from "./Svg/white_cart_icon.png";
import FlagIcon from "../../Assets/Svg/flag.png";

const Navbar = () => {
    return (
        <div className="nb-parent-div">
            <div className="nb-navbar-background">
                <div className="nb-amazon-logo-container">
                    <img src={AmazonLogo} alt="Amazon Logo" className="nb-amazon-logo" />
                </div>

                <div className="nb-navbar-address">
                    <div className="nb-navbar-address-container">
                        <img src={LocationIcon} alt="Location Logo" className="nb-location-logo" />
                        <div className="nb-address-content">
                            <span className="nb-delivering-to">Deliver to Gaurav</span>
                            <span className="nb-delivering-city-pin nb-text-bold">Dharamshala 176215</span>
                        </div>
                    </div>
                </div>
                <div className="nb-search-input">
                    <input type="text" className="nb-input-field" placeholder="Search Amazon" />
                    <img src={SearchIcon} alt="Search-Icon" className="nb-search-icon" />
                </div>
                <div className="nb-country">
                    <img src={FlagIcon} alt="Country Flag" className="nb-country-flag" />
                    <span className="nb-country-code nb-text-bold">IN</span>
                </div>
                <div className="nb-account-container">
                    <span className="nb-acc-holder">Hello, sign in</span>
                    <span className="nb-account-details nb-text-bold">Account & Lists</span>
                </div>
                <div className="nb-orders-list">
                    <span className="nb-order-details nb-text-bold">Orders</span>
                </div>
                <div className="nb-cart-container">
                    <div className="nb-cart-details">
                        <span className="nb-cart-items-count nb-text-bold">0</span>
                        <img src={CartIcon} alt="Cart icon" className="nb-cart-icon" />
                    </div>
                    <span className="nb-cart-label nb-text-bold">Cart</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
