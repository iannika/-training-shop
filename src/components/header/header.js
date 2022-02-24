import React from 'react';
import classNames from 'classnames';
import tel from "../../assets/img/icons/phone.png";
import location from "../../assets/img/icons/location-marker.png";
import clock from "../../assets/img/icons/clock.png";
import facebook from "../../assets/img/icons/facebook.png";
import twitter from "../../assets/img/icons/logo-twitter.png";
import instagram from "../../assets/img/icons/instagram.png";
import pinterest from "../../assets/img/icons/logo-pinterest.png";

import search from "../../assets/img/icons/search.png";
import globe from "../../assets/img/icons/globe.png";
import user from "../../assets/img/icons/user.png";
import shoppingBag from "../../assets/img/icons/shopping-bag.png";

import { Link } from "react-router-dom";
import { MENU } from '../../data/MENU';
import { useState } from 'react';




import './header.css';



const Header = () => {

    const [isMenuOpen, toggleMenu] = useState(false);
	function toggleMenuMode() {
		toggleMenu(!isMenuOpen);
	}

    return (

        <div className='header' data-test-id='header'>
            <div className='container-top-bar'>
                <div className='top-bar'>
                    <div className='top-bar_contacts'>
                        <div className='top-bar-tel'>
                            <img src={tel} alt='img'/>
                            <span>+375 29 100 20 30</span>
                        </div>
                        <div className='top-bar-location'>
                            <img src={location} alt='img'/>
                            <span>Belarus, Gomel, Lange 17</span>
                        </div>
                        <div className='top-bar-clock'>
                            <img src={clock} alt='img'/>
                            <span>All week 24/7</span>
                        </div>
                    </div>
                    <div className='top-bar_social-networks'>
                        <a href="/#"><img src={facebook} alt='img'/></a>
                        <a href="/#"><img src={twitter} alt='img'/></a>
                        <a href="/#"><img src={instagram} alt='img'/></a>
                        <a href="/#"><img src={pinterest} alt='img'/></a>
                    </div>
                </div>
            </div>
            <div className='container-bottom-bar'>
                <nav className='bottom-bar-nav-menu'>
                    <Link to="/" className='bottom-bar-nav-logo' data-test-id='bottom-bar-logo-link'>CleverShop</Link>
                    <div className={classNames('burger-menu', {visible: isMenuOpen})} data-test-id='burger-menu'>
                        {MENU.map(({ id, path, name }) => (
                            <Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`} onClick={toggleMenu}>
                                <span>{name}</span>
                            </Link>
                        ))}

                    </div>                    
                    <div className='menu-nav'>
                        <img src={search} alt='img' />
                        <img src={globe} alt='img' />
                        <img src={user} alt='img' />
                        <img src={shoppingBag} alt='img' />
                        {/* <div className="count"><p>2</p></div> */}

                        <div  className={classNames("burger-menu-btn", { visible: isMenuOpen })} onClick={toggleMenuMode} data-test-id="burger-menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>                       
                </nav>
            </div>
        </div> 
          
    )
}
export {Header};