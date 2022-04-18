import React, { useContext, useEffect, useState } from 'react';
import Service from '../Service/Sevice';
import { ProductContext } from '../../../App';
import './Services.css';

const Services = () => {
    // const [services, setServices] = useState([]);

    const [services, setServices] = useContext(ProductContext);
    

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
            <div className="row">
            <h1 className='text-danger text-center mt-5 mb-5'>Wildlife Photography</h1>
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