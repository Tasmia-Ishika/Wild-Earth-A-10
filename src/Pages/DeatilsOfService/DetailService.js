import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const DetailService = () => {
  const { detailId } = useParams();

  const [services, setServices] = useContext(ProductContext);


  const service = services.find(service => service.id == detailId);
  console.log(service);

  return (
    <div>
      <h1 className='mt-4 text-danger text-center'>Details of Pictures</h1>
      <div className='text-center'>
        <div>
          <img className='w-50 mt-3' src={service?.img} alt="" />
          <h2 className='mt-2 p-3'> {service?.name}</h2>
          <h3> ${service?.price}</h3>
          <p className='p-4 m-4'>{service?.description}</p>
        </div>
        <Link to="/checkout">
          <button className='btn btn-danger'>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailService;