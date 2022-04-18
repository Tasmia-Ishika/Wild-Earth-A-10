import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/detail/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2 className='mt-2 p-3'> {name}</h2>
            <h3> ${price}</h3>
            <p className='p-2 m-2'>{description}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-danger '>Book Now</button>
        </div>
    );
};

export default Service;