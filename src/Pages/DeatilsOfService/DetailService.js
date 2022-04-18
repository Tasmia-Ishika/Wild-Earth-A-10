import React from 'react';
import { Link } from 'react-router-dom';

const DetailService = () => {
  return (
    <div>
      <h1>Welcome to Details</h1>
      <div className='text-center'>
        <Link to="/checkout">
          <button className='btn btn-danger'>Proceed to Checkout</button>
        </Link>
      </div>

    </div>
  );
};

export default DetailService;