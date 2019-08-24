import React from 'react';


export default function (Presentation) {
    const slidesUrl = 'VeeTee Technologies';
    const images = {
        logo: require("../assets/logo.png")
    }
    return (props) => (
        <div>
            <div style={{
                position: 'absolute',
                zIndex: '1',
                width: '100%',
                padding: 5,
                textAlign: 'center',
                fontSize: 20,
            }}>
                <img src={images.logo}/>

            </div>
            <Presentation {...props} />
        </div>
    );
}
