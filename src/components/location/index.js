import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11353.972641844493!2d-63.576839!3d44.648275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xededf12a4cb5c849!2sScotiabank%20Centre!5e0!3m2!1sen!2sca!4v1599674698757!5m2!1sen!2sca" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
                title="The venue location"
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;