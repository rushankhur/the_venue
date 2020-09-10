import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

const Pricing = () => {
    const [prices] = useState([100, 150, 250]);
    const [positions] = useState(['Balcony', 'Medium', 'Star']);
    const [desc] = useState([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada nibh id erat mollis blandit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada nibh id erat mollis blandit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada nibh id erat mollis blandit'
    ]);
    const [linkto] = useState(['http://sales/b', 'http://sales/m', 'http://sales/s']);
    const [delay] = useState([500, 0, 500]);

    
    const showBoxes = () => (
        prices.map((box, i) => (
            <Zoom key={i} delay={delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${prices[i]}</span>
                            <span>${positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    );

    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section"> 
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>

            </div>
        </div>
    );
}

export default Pricing;