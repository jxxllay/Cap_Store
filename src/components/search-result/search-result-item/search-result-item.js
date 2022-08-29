import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = ({ capsSearchItem, id }) => {
    const newLink = `/prod-info/${capsSearchItem.id}`
     
    console.log(capsSearchItem.capsimage);
    const imgArr = capsSearchItem.capsimage
    const img = imgArr.map(i => {
        return i.photo
    })

    console.log(img);
    return (
        <div key={id} className='catalog-product' id={id}>
            <div className='product-img-container'>
                <Link to={newLink}><div className='caps-product-img'><img className='search-res-img' alt='phto-img' src={img} /></div></Link>
            </div>
            <div className='caps-product-content'>
                <div className='product-desc'>
                    <h3>{capsSearchItem.brand.name}</h3>
                    <p>{capsSearchItem.name}</p>
                </div>
                <div className='product-desc-price'>{capsSearchItem.price}с</div>
            </div>
        </div >
    )
}

export default SearchResultItem;