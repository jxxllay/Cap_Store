import React, {useEffect} from "react";
import CatalogItem from "../catalog-item";
import { fetchCaps, capsAcsending } from "../../actions";
import withCapsService from "../hoc";
import { connect } from "react-redux";

import './catalog.css'
import { Link } from "react-router-dom";

const Catalog = ({fetchCaps, loading, error, capsAcsending, caps}) => {
    useEffect(() => fetchCaps() ,[])

    return (
        <div className='catalog-container'>
            <div className='links-container main-container'>
                <Link to='/' className='from-page'>Home</Link>
                <p className='from-page'>&gt;</p>
                <Link to='/catalog/' className='to-page'>Каталог</Link>
            </div>
            <div className='catalog-banner-container'>
                <div className='catalog-b-desc'>
                    <h2>НОВАЯ СЕРИЯ</h2>
                    <h2>McLAREN</h2>
                </div>
            </div>
            <div className='catalog-sorting'>
                <select onChange={capsAcsending} id="sort-product" name="sort">
                    <option value="popular">Популярные</option>
                    <option value="cheap-first">Сначала дешевые</option>
                    <option value="expensive-first">Сначала дорогие</option>
                    <option value="new">Новинки</option>
                </select>
            </div>

            <div className='caps-catalog-flex main-container'>
                {
                   caps.map((cap) => {
                    if (loading) {
                        return (
                            <h6 key ={cap.id + 1}> Loading ... </h6>
                        )   
                    }
                    if (error) {
                        return (
                            <h6 key ={cap.id + 2}> Error ... </h6>


                        )   
                    };
                    return (
                    <div key={cap.id}><CatalogItem cap={cap}/></div>

                )})
                    

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {return state}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {fetchCaps: () => fetchCaps(dispatch, ownProps.capsService),
        capsAcsending: () => dispatch(capsAcsending())}
}

export default withCapsService(connect(mapStateToProps, mapDispatchToProps)(Catalog));