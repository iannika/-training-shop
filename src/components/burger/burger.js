import React, {useState} from 'react';
import classNames from 'classnames';


import './burger.css';


const Burger = (isMenuOpen, toggleMenuMode) => {

    return (
        <>
            <div  className={classNames("burger-menu", { visible: isMenuOpen })} onClick={toggleMenuMode} data-test-id='burger-menu'>
                <span></span>
                <span></span>
                <span></span>

            </div>

        </>
    )
}

export {Burger};
