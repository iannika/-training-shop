import React, {useState} from 'react';

import { Menu } from '../../components/menu/menu';


import './burger.css';


const Burger = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='burger' open={open} onClick={() => setOpen(!open)} data-test-id='burger-menu'>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <Menu open={open}/>
        </>
    )
}

export {Burger};
