import React from "react";

import './banner-m.css'

import kepka1 from './main-b-img/kepka1.png'
import kepka2 from './main-b-img/kepka2.png'
import kepka3 from './main-b-img/kepka3.png'
import ellipse3 from './main-b-img/Ellipse_5.svg'
import { Link } from "react-router-dom";

const BannerMain = () => {
    return (
        <div className='m-b-adaptive-container'>
            <div className="main-banner-container">
                <span className='p-absolute ellipse-left'/>
                <img src={kepka2} className='p-absolute cap-left' alt='cap-left'/>
                <img src={kepka3} className='p-absolute absolute-right cap-right' alt='cap-right'/>
                <span className="p-absolute absolute-right ellipse-right"><img src={ellipse3} alt="ellipse"/></span>
                <img src={kepka1} className='p-absolute cap-center' alt="ellipse"/>
            </div>
            <div className='banner-main-text'>
                <div className='banner-main-tittle'>
                    <h1>NEW ERA</h1>
                    <span className='square'></span>
                </div>
                <p className='b-m-text'>
                    Новая коллекция 2021 уже доступны на заказ яркие цвета, винтажный принт 70х, тематические группы и отличное качество
                </p>
                <p className='b-m-adap-text'>
                    Новая коллекция 2021 уже доступны на заказ яркие цвета...
                </p>
                <Link to='/catalog/' className='c-desc-btn btn yellow-btn'>Открыть каталог</Link>
            </div>
        </div>
        
    )
}

export default BannerMain;