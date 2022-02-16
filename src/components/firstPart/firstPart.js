import React from 'react';

import chevronLeft from '../../assets/img/chevron-left.png'
import chevronRight from '../../assets/img/chevron-right.png'

import './firstPart.css';

const FirstPart = () => {
    return (
        <div className='first-part'>
            <div className='first-part-banner'>
                <div className='first-part-circle'><img src={chevronLeft} alt='img' /></div>
                <div className='first-part-banner-text'>
                    <span>Banner</span>
                    <span className='text'>Your title text</span>
                </div>
                <div className='first-part-circle'><img src={chevronRight} alt='img' /></div>
            </div>
            <div className='first-part-group'>
                <div className='first-part-women'>
                    <div>
                        <span>Women</span>
                    </div>
                </div>
                <div className='first-part-men'>
                    <div>
                        <span>Men</span>
                    </div>
                </div>
                <div className='first-part-accessories'>
                    <div>
                        <span>Accessories</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {FirstPart}