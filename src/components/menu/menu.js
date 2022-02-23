import React from "react";

import { Link } from "react-router-dom";
import { MENU } from '../../data/MENU';


import './menu.css';


const Menu = ({ open }) => {
    return (
        <div className='menu' data-test-id='menu' open={ open }>
            {MENU.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    )
}

export {Menu}