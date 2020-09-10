import React, { useState, useEffect, useCallback } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

const Discount = () => {
    const [discountStart, setDiscountStart] = useState(0);
    const [discountEnd] = useState(30);

    const percentage = useCallback(() => {
        if (discountStart < discountEnd) {
            setDiscountStart(discountStart + 1);
        }
    }, [discountStart, discountEnd])


    useEffect(() => {
        setTimeout(() => {
            percentage()
        }, 30)
    }, [percentage]);

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                    onReveal={() => percentage()}
                >
                    <div className="discount_percentage">
                        <span>{discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before 30th OCTOBER</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada nibh id erat mollis blandit. 
                        Duis neque dui, lobortis vel nunc vitae, fermentum volutpat dui.</p>

                        <MyButton
                            text="Purchase tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="http://google.com"
                        />
                    
                    </div>
                </Slide>

            </div>
        </div>
    );
}

export default Discount;