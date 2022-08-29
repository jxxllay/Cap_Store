import React from "react";
import kepka3 from './cart-img/kepka3.png'
import './cart-c.css'
import "./PopUpWindow/PopUpWindow";
import {useState} from "react";
import Modal from "./PopUpWindow/PopUpWindow";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";






const Cart = ({items, CapsAddedToCart, CapsRemoveFromCart} ) => {
    const [openModal, setOpenModal] = useState(false);
    const itemsPrice = items.map((item) => item.total).reduce((a, b) => a + b, 0)
    const btnFunc = (e) => {
        e.preventDefault()
        const user = [e.target[0].value, e.target[1].value];
        const itemsName = items.map((item) => item.title)
        

        fetch('http://164.92.190.147:8003/api/orders/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': 'w65mOZ6SL4hVvz3qo3M1nT5Yy8WQ5jIMGxTp1g5xOuxqx1OKhw6OlHy6qw7PUJtU',
            },
            body: {
                "item": itemsName,
                "user": user,
                "price": itemsPrice,

            },
        }).then(() => setOpenModal(true)).catch(() => setOpenModal(false))
        
    }
    
    const content = items?.map((item, idx) => {
       return (
           <div key={item.id}>
               <div key={idx} className='cart'>
                   <img className='cart-cap-img' src={item.pic} alt="cap-3"/>
                   <div className='product-count'>
                       <input onClick={() => CapsRemoveFromCart(item.id, item.size)} type="button" value='-'/>
                       <p>{item.count}</p>
                       <input onClick={() => CapsAddedToCart(item.id, item.size)} type="button" value='+'/>
                   </div>
                   <input className='cart-inp' type="button" value={item.size}/>
                   <div className='text-cart'>
                       <h4>{item.brandName}</h4>
                       <p>{item.title}</p>
                   </div>
                   <h2>{item.total}сом </h2>

                </div>
            </div>
        )
    })



    return (
        <div className='catalog-container main-container'>
            <div className='links-container'>
                <Link to='/' className='from-page'>Home</Link>
                <p className='from-page'>&gt;</p>
                <p className='to-page'>Cart</p>
            </div>
            <hr className='thick-hr'/>
            {content}
            <hr className='thick-hr'/>
            <div className='total-sum-c'>
                <div >Всего:</div>
                <div className='total-sum'>{itemsPrice}сом</div>
            </div>
            <hr className='thick-hr'/>
            <form onSubmit={(e) => btnFunc(e)} className='cart-info'>
                <h2>Ваша информация</h2>
                <input required className='inp' type="text" placeholder='Имя'/>
                <input required className='inp' type="tel" pattern="0[0-9]{3}[0-9]{3}[0-9]{3}" placeholder='0777888999'/>
                <button type='submit' className='btn yellow-btn cart-btn'>Купить</button>
            </form>
                {/*dont forget this => */}{openModal && <Modal />}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cartItems
    }
}


export default connect(mapStateToProps, actions)(Cart);