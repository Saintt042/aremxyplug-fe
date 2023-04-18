import React from "react";
import { Container } from "./FooterStyle";
import footerLogo from "../../assets/footerLogo.svg";
import googleplay from "../../assets/GetItOnGooglePlay.svg";
import applestore from "../../assets/GetItOnApple.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <div className="footer__wrapper">
        <img src={footerLogo} alt="logo" />

        <div className="text__wrapper">
          <div className="aremxyplug">
            <h3>AremxyPlug</h3>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Customers</li>
              <li>Partners</li>
              <li>Become an Agent</li>
              <li>Become a Merchant</li>
              <li>Become a Partner</li>
            </ul>
          </div>

          <div className="product">
            <h3>Product</h3>
            <ul>
              <li>Telecom</li>
              <li>Payment</li>
              <li>Card Issuing</li>
              <li>Digital services</li>
              <li>Virtual Account</li>
              <li>Currency conversion</li>
              <li>Multi-Currency Wallet</li>
              <li>International Payment</li>
              <li>VTU Development</li>
              <li>Business Development</li>
            </ul>
          </div>
          <div className="solutions">
            <h3>Solutions</h3>
            <ul>
              <li>BaaS</li>
              <li>SaaS</li>
              <li>Businesses</li>
              <li>Individuals</li>
              <li>Ecommerce</li>
              <li>Collect</li>
              <li>Purchase</li>
              <li>Automate</li>
              <li>Convert</li>
              <li>Transfer</li>
            </ul>
          </div>

          <div className="resources">
            <h3>Resources</h3>
            <ul>
              <li>Pricing</li>
              <li>Support</li>
              <li>Blog</li>
              <li>FAQs</li>
            </ul>
            <div className="legal">
              <h3>Legal</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
              </ul>
            </div>
          </div>

          <div className="developer">
            <h3>Developer</h3>
            <ul>
              <li>API Documentation</li>
              <li>API Reference</li>
              <li>API Changelog</li>
              <li>API Status</li>
            </ul>

            <div className="Contactus">
              <h3>Contact us</h3>
              <ul>
                <li>Live Chat</li>
                <li>Contact Sales</li>
                <li>Email</li>
                <li>Phone</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact__wrapper">
          <div className="links">
            <h1 className="socials">Follow Us on</h1>
            <span>
              <a href="/" target="_blank" rel="noreferrer">
                <i class="ri-linkedin-box-fill"></i>
              </a>
            </span>

            <span>
              <a href="/" target="_blank" rel="noreferrer">
              <i class="ri-facebook-box-fill"></i>
              </a>
            </span>

            <span>
              <a href="/" target="_blank" rel="noreferrer">
                <i class="ri-instagram-fill"></i>
              </a>
            </span>

            <span>
              <a href="/" target="_blank" rel="noreferrer">
                <i class="ri-twitter-fill"></i>
              </a>
            </span>

            <span>
              <a href="/" target="_blank" rel="noreferrer">
                <i class="ri-mail-line"></i>
              </a>
            </span>

            <p>Email us at: hello@aremxyplug.com</p>
          </div>


          <div className="social__links">
            <h1 className="download">Download Our App</h1>
            <p>
              Discover exclusive deals and discounts with <br /> our mobile
              experiences.
            </p>
             <span>
                <img src={googleplay} alt="logo" />
              </span>
              <span>
                <img src={applestore} alt="logo" />
              </span>
          </div>
        </div>
        <h5 id="copyright">AremxyPlug {year}. All rights Reserved. </h5>
      </div>
    </Container>
  );
};

export default Footer;
