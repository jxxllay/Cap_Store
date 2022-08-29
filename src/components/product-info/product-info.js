import React, { useEffect, useState } from "react";
import Slider from "../main_page/slider";
import { connect } from "react-redux";
import {fetchCap, AddedToOrder} from "../../actions";
import withCapsService from "../hoc";
import './product-c.css'
import { Link } from "react-router-dom";



const ProductInfo = ({selectedItemId, fetchCap, cap, AddedToOrder}) => {
    const [counter, setCounter] = useState(1);

    const [size, setSize] = useState()
    
    const onSize = (e) => {
        e.preventDefault()
        let i = 0
        while (i < e.target.length) {
            if (e.target[i].value === size) {
                e.target[i].classList.add('cart-inp-c-active')
            } else {
                e.target[i].classList.remove('cart-inp-c-active')
            }
            i++;
        }
    }
    const incAmount = () => {
        setCounter(count => count + 1);
    };
    
    const decAmount = () => {
        setCounter(count => count - 1);
    };

    useEffect (() => fetchCap(selectedItemId), [selectedItemId])
    const mapSizes = cap.size
    
    
    return (
        <div className='main-container'>
            <div className='links-container'>
                <Link to='/' className='from-page'>Home</Link>
                <p className='from-page'>&gt;</p>
                <Link to='/catalog/' className='from-page'>Каталог</Link>
                <p className='from-page'>&gt;</p>
                <p className='to-page'>Детали Продукта</p>
            </div>

            
            

            <div className='product-details'>
                <div className='caps-details-img'>
                    <div className='main-cap-container'>
                        <img className='main-cap-img' src={cap.pic} alt='main-c-img'/>
                    </div>
                    <div className='cap-details'>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img1.png')} alt='minor-cap-img'/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img2.png')} alt='minor-cap-img'/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img3.png')} alt='minor-cap-img'/>
                        </div>
                    </div>
                </div>

                
                
                <div className='caps-details-info'>
                    
                    <form onSubmit={(e) => onSize(e)} className='c-d-sizes' id='form-size'>
                        {
                            mapSizes?.map((val) => (
                                <input onClick={(e) => setSize(e.target.value)} key={val.value} className='cart-inp-c' type='submit' value={val.value} />))
                        }
                    </form>
                    
                    <div className='product-count p-c-top'>
                        <input onClick={decAmount} className='cart-inp-c' type="button" value='-'/>
                        <span >{counter}</span>
                        <input onClick={incAmount} className='cart-inp-c'  type="button" value='+'/>
                    </div>
                    
                </div>

                <div className='details-box'>
                    <div className='c-d-tittle'>
                        <h3>{cap.brand}</h3>
                        <p>{cap.name}</p>
                    </div>

                    <div className='c-d-price'>{cap.price}сом</div>
                    <button onClick={() => AddedToOrder(cap.id, counter, size)} className='btn yellow-btn c-d-btn'>Добавить в корзину</button>

                </div>
                
            </div>
            
            

            <div className="slider-tittle">
                <h1>Похожие товары</h1>
            </div>
            <Slider />



        </div>
    )
}

const mapStateToProps = (state) => {return state}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCap: (selectedItemId) => fetchCap(dispatch, ownProps.capsService, selectedItemId),
        AddedToOrder: (capsId, count, size) =>  dispatch(AddedToOrder(capsId, count, size))

    }
}



export default withCapsService(connect(mapStateToProps,mapDispatchToProps)(ProductInfo));