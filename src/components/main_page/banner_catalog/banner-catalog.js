import React, { useEffect } from "react";

import imgCaps from "./banner-catlg-img/painted-caps.png"
import imgUrl from "./banner-catlg-img/catalog-bg.svg"
import withCapsService from "../../hoc";
import { fetchStickers } from "../../../actions";
import { connect } from "react-redux";


import './banner-cat.css'
import { Link } from "react-router-dom";

const BannerCatalog = ({fetchStickers, caps}) => {
    useEffect(() => fetchStickers(), [])

    return (
        <div className='banner-c-container'>
            <div className="card-container flex-column">
                
                {
                    caps.slice(6, 9).map((data) => {
                        const stickerLink = `/prod-info/${data.id}`
                        return (
                            <div key={data.id} className="card card-adaptive">
                            <div className="card-desc">
                                <div className="card-text-desc">
                                    <p className="desc-tittle">{data.brand.name}</p>
                                    <p className="desc-class">{data.name}</p>
                                    <div className="card-desc-price">{data.price}c</div>
                                </div>
                                <Link to={stickerLink}>
                                <img className="card-img" src={imgCaps} alt="caps-img"/>
                                </Link>
                            </div>
                            </div>
                        )
                    })
                }
                
            </div>

            <div className='banner-c-desc'>
                <h1 className="c-major-desc">
                    Supreme & New Era
                </h1>
                <p className='c-minor-desc'>collaboration</p>
                <Link to='/catalog/' className="c-desc-btn purple-btn btn">Открыть каталог</Link> 
            </div>

            <img className='banner-c-caps' src={imgUrl} alt='banner-img'></img>
            <img className='banner-c-caps-adap p-absolute' src={require('./banner-catlg-img/catalog-bg480px.png')} alt='banner-adap-img'></img>
        </div>
    )
}

const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {fetchStickers: () => fetchStickers(dispatch, ownProps.capsService)}
}

export default withCapsService(connect(mapStateToProps,mapDispatchToProps)(BannerCatalog));