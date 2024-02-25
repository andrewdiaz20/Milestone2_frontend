import React from "react";
import "../CSS/Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                    <div className="footer-row">
                        {/* Column 1 */}
                    <div className="footer-nav-col">
                        <h3>About Us</h3>
                        <ul>
                            <li>About the Company</li>
                            <li>Careers</li>
                            <li>News Room</li>
                        </ul>
                        </div>
                        {/* Column 2 */}
                    <div className="footer-nav-col">
                        <h3>Help</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Advertise With Us</li>
                            <li>My Account</li>
                            <li>Feedback</li>
                        </ul>
                        </div>
                        {/* Column 3 */}
                    <div className="footer-nav-col">
                        <h3>Services</h3>
                        <ul>
                            <li>Track Orders</li>
                            <li>Shipping FAQs</li>
                            <li>Pickup</li>
                            <li>Same-day Delivery</li>
                        </ul>
                    </div>
                    </div>
                    <br />  
            <div class='footer-social-links'>
                <div class='footer-social-ribbon'>Let's Connect</div>
                <ul>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/118497/facebook'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/nj0Uj45LGUYh/instagram'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/phOKFKYpe00C/twitterx'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/qLVB1tIe9Ts9/youtube'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/63676/pinterest'></a></li>
                </ul>
                </div>
                <div className="footer-row">
                        <p className="col-sm">
                            &copy;{(new Date().getFullYear())} FOODIE CENTRAL INC | All right reserved | Terms of Service | Privacy
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Footer;
