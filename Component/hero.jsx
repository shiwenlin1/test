import React from 'react';

const Hero = () => {

    return(
        <div className="herosection">
            <div className="herotext">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                We are a family owned Mediterranean
                restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <div className="rt">
                <button>
                    Booking Table                    
                </button>      
                </div>              
            </div>  
            <div className="pt">
            <img src="/littlelemon1.jpg" alt="Little Lemon Restaurant" />
            </div>                 

        </div>
    )
}

export default Hero