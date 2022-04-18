import React from 'react';
import Service from '../../Service/Service';

const Services = () => {
    const servicesInfo=[
        {id:1, name:'Under Water photography', img : 'img/banner1.jpg'},
        {id:2, name:'Under Water photography', img : 'img/banner3.jpg'},
        {id:3, name:'Under Water photography', img : 'img/banner4.jpg'}
    ]
    return (
        <div className='services'>
            <h4>Services</h4>
            <div className="services-container">

            {
                servicesInfo.map(service=><Service
                    key ={service.id}
                    service={service}
                    ></Service>)
                }
                </div>
        </div>
    );
};

export default Services;