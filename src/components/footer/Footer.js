import React from 'react';
import './Footer.css';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg'
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
    <div className='footer'>
        <hr/>
            <div className='footer-adaptive'>
                <div className='left'>
                    <div className='footer-info'>
                        <div className='products'>
                            <h4>Продукция</h4>
                            <Link to='/catalog/'><p>Кепки</p></Link>
                            <Link to="/"><p>Шапки</p></Link>
                            <Link to="/"><p>Панамки</p></Link>
                            <Link to="/"><p>Кастомизация</p></Link>
                            <Link to="/"><p>Другая продукция</p></Link>
                            <Link to="/"><p>Эксклюзив</p></Link>
                        </div>
                        <div className='about-company'>
                            <h4>О компании</h4>
                            <Link to="/"><p>О нас</p></Link>
                            <Link to="/"><p>Контакты</p></Link>
                        </div>
                    </div>

                    <div className='subscribe'>
                        <h4>Подписаться на новинки</h4>
                        <form action="" className='form'>
                            <input type="text" placeholder='Email address' className='email-text' />
                            <button>
                                <Link to="/"><img className='submit' src={require('../footer/images/sub.png')} alt="sub"/></Link>
                            </button>
                        </form>
                    </div>
                </div>
                <hr className='hr-adap'/>
                <div className='cards'>
                    <div className='card-style'>
                        <Link to="/"><img className='vector' src={require('../footer/images/vector.png')} alt="vector"/></Link>
                        <Link to="/"><img className='mastercard' src={require('../footer/images/mastercard.png')} alt="master"/></Link>
                        <Link to="/"><img className='visa' src={require('../footer/images/visa.png')} alt="visa"/></Link>
                    </div>
                    <h4>+996 755 999820</h4>
                </div>
            </div>

        <div className='second'>
            <div className='main'>
                <div className='logo'>
                    <div className='logo-img'>
                        <Link to="/"><img className='logo-img-footer' src={require('../header/header-img/logo.png')} alt="logo"/></Link>
                    </div>
                    <div className='logo-text'>
                        <h6>CUSTOM CAPS</h6>
                        <p>магазин кепок</p>
                    </div>
                </div>
                    <div className='icons'>
                        <div className='oval'>
                            <Link to="https://www.instagram.com/"><img className='iconsOfFooter' src={instagram} alt="instagram"/></Link>
                        </div>
                        <div className='oval'>
                            <Link to="https://www.facebook.com/"><img className='iconsOfFooter' src={facebook} alt="facebook"/></Link>
                        </div>
                        <div className='oval'>
                            <Link to="https://www.twitter.com/"><img className='iconsOfFooter' src={twitter} alt="twitter"/></Link>
                        </div>
                    </div>
                </div>
            <p className='cursive'>© Copyright 2019 - Lift Media</p>
        </div>
    </div>
    );
}

export default Footer;