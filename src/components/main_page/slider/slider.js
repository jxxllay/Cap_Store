import React, { useEffect } from 'react';
import './slider.css'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import {Navigation} from "swiper";
import 'swiper/css/navigation';

import { connect } from 'react-redux';
import withCapsService from '../../hoc';
import { fetchStickers } from '../../../actions';
import { Link } from 'react-router-dom';

const Slider = ({fetchStickers, caps}) => {
    useEffect(() => fetchStickers(),[fetchStickers])
    return (
            <div className="swiper-inner main-container">
                <i className='arrow-left fa-solid fa-angle-left' alt="arrow-left"></i>
                <Swiper
                    modules={[Navigation]}
                    className='swiper'
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.arrow-left',
                        nextEl: '.arrow-right'
                    }}>
                    {
                        caps.map((data) => {
                            const sliderLink = `/prod-info/${data.id}` 
                            return (
                                <SwiperSlide key={data.id}>
                                    {
                                        <div className='swiper-card'>
                                            <Link to={sliderLink}><img className='sw-card-img' src={require('./slider-img/kepka1.png')}
                                                alt="slider-cap"/></Link>
                                            <div className="card-body">
                                                <div className='kepka-brand'>{data.brand.name}</div>
                                                <div className='kepka-model'>{data.name}</div>
                                                <div className="kepka-price">{data.price}c</div>
                                            </div>
                                        </div>
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <i className='arrow-right fa-solid fa-angle-left' alt="arrow-right"/>
            </div>
        
    );
};
const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {fetchStickers: () => fetchStickers(dispatch, ownProps.capsService)}
}


export default  withCapsService(connect(mapStateToProps,mapDispatchToProps)(Slider))
