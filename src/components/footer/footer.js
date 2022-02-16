import React from "react";
import { Link } from "react-router-dom";
import { CATEGORYLINKS } from "../../data/CATEGORY_LINKS";
import { INFORMATIONLINKS } from "../../data/INFORMATION_LINKS";
import { USEFULLINKS } from "../../data/USEFUL_LINKS";
import { CONTACTUSLINKS } from "../../data/CONTACT_US_LINKS";


import facebook from "../../assets/img/icons/facebook.png";
import twitter from "../../assets/img/icons/logo-twitter.png";
import instagram from "../../assets/img/icons/instagram.png";
import pinterest from "../../assets/img/icons/logo-pinterest.png";

import stripe from "../../assets/img/stripe.png";
import aes from "../../assets/img/AES256.png";
import pay from "../../assets/img/paypal.png";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";
import discover from "../../assets/img/discover.png";
import americanExpress from "../../assets/img/american-express.png";

import "./footer.css";

const Footer = () => {
    return (
        <div className="footer" data-test-id="footer">
            <div className="wrapper-footer-contact-form">
                <div className="footer-contact-form">
                    <span>BE IN TOUCH WITH US:</span>
                    <form className="contact-form">
                        <input type="text" placeholder="Enter your email"  />
                        <button>Join Us</button>
                    </form>
                    <div className='top-bar_social-networks'>
                        <a href="/#"><img src={facebook} alt='img'/></a>
                        <a href="/#"><img src={twitter} alt='img'/></a>
                        <a href="/#"><img src={instagram} alt='img'/></a>
                        <a href="/#"><img src={pinterest} alt='img'/></a>
                    </div>
                </div>
            </div>
            
            <div className="wrapper-footer-nav">
                <div className="footer-nav">
                    <strong>CATEGORIES</strong>
                    {CATEGORYLINKS.map(({ id, path }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{path}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>INFORMATION</strong>
                    {INFORMATIONLINKS.map(({ id, path }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{path}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>USEFUL LINKS</strong>
                    {USEFULLINKS.map(({ id, path }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{path}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>CONTACT US</strong>
                    {CONTACTUSLINKS.map(({ id, img, path, name }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <img src={img} alt="img" /><span>{name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="wrapper-footer-contact-inform">
                <div className="footer-contact-inform">
                    <span>Copyright © 2032 all rights reserved</span>
                    <div className="footer-contact-inform-card">
                        <div><img src={stripe} alt="img" /></div>
                        <div><img src={aes} alt="img" /></div>
                        <div><img src={pay} alt="img" /></div>
                        <div><img src={visa} alt="img" /></div>
                        <div><img src={mastercard} alt="img" /></div>
                        <div><img src={discover} alt="img" /></div>
                        <div><img src={americanExpress} alt="img" /></div>
                    </div>
                    <a href="/#">Clevertec.ru/training</a>
                </div>
            </div>
           
        </div>
    )
}

export {Footer}