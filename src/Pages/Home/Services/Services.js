import React, { useEffect, useState } from 'react';
import Service from '../Service/Sevice';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
            <div className="row">
            <h1 className='text-danger text-center mt-5 mb-5'>Our Wildlife Photography</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;