import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    return (
        
        <div className='servicediv
        ' style={{backgroundImage: `url(${service?.img})`}}>
            <div className="info">

            <p>{service?.name}</p>
            <p>Price: ${service?.price}</p>
            <small>{service?.description}</small>
            </div>
            <button onClick={()=>navigate('/checkout')}>Checkout</button>
            
            
        </div>
    );
};

export default Service;