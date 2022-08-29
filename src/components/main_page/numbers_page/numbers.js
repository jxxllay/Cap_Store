import React from "react";

import './numbers.css'

const Numbers = () => {
    return (
        <div className='custom main-container'>
            <h1>CUSTOM CUPS в цифрах</h1>
            <div className='num'>
                <div className='number'>
                  <h3>12000</h3>
                  <p>проданных кепок</p>
                </div>
                <div className='number'>
                    <h3>9</h3>
                    <p>лет на рынке</p>
                </div>
                <div className='number'>
                    <h3>8500</h3>
                    <p>довольных клиентов</p>
                </div>
            </div>
        </div>
        
    )
}

export default Numbers;