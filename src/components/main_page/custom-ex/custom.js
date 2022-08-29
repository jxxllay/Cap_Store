import React, { useEffect }  from "react";
import './custom.css';

import withCapsService from "../../hoc";
import { fetchStickers } from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Custom = ({fetchStickers, caps}) => {
    useEffect(() => fetchStickers(), [])
    return (
    <div className='custom-card-container'>
       
        <div className="card-container card-slider">
            {
                caps.slice(6, 9).map((data) => {
                    const stickerLink = `/prod-info/${data.id}` 
                    return (
                        <div key={data.id} className="card flex-row">
                            <div className="card-desc card-slider">
                                <Link to={stickerLink}>
                                <img className="card-img" src={require('./custom-img/adidas.jpg')} alt=""/>
                                </Link>
                                <div className="card-text-desc">
                                    <p className="desc-year">2022</p>
                                    <p className="desc-tittle">{data.brand.name}</p>
                                    <p className="desc-class">{data.name}</p>
                                    <div className="text-margin card-desc-price">{data.price}c</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='small-caps-container main-container'>
            <div className='small-c-custom s-c-container'>
                <div className='small-c-desc'>
                    <h3>Кастомные</h3>
                    <p>Создай свой стиль</p>
                </div>
            </div>
            <div className='small-c-exclusive s-c-container'>
                <div className='small-c-desc'>
                    <h3>Эксклюзив</h3>
                    <p>Найди уникальные кепки</p>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {fetchStickers: () => fetchStickers(dispatch, ownProps.capsService)}
}

export default withCapsService(connect(mapStateToProps,mapDispatchToProps)(Custom));