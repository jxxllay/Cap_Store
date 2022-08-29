import React from 'react';
import './PopUpWindow.css'
import doneIcon from '../cart-img/done-icon.png'
import {useHistory} from 'react-router-dom';


function Modal(){
    const history = useHistory();

    const handleHistory = () => {
        history.push("/");
        document.location.reload(true)
    }
    return (
            <div className="popup">
                <div className="popup-inner">
                    <img src={doneIcon} alt="done-icon"/>
                    <h3>Спасибо</h3>
                    <h3>Ваш заказ принят</h3>
                    <h3>Ожидайте с Вами скоро свяжутся</h3>
                </div>
                <button id='btn-main-page' onClick={handleHistory}>На главную</button>
            </div>
    );
}

export default Modal;