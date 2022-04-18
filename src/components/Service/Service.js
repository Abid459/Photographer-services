import React from 'react';

const Service = ({service}) => {
    // const [name,img] = service;
    return (
        <div className='servicediv
        ' style={{backgroundImage: `url(${service?.img})`}}>
            <div className="info">

            <p>{service?.name}</p>
            <p>Price: $332</p>
            </div>
            <button>Checkout</button>
            
            
        </div>
    );
};

export default Service;