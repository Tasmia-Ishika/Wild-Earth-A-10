import React from 'react';
import donation1 from '../../../images/donation/donation 1.jpg'
import donation2 from '../../../images/donation/donation2.jpg'

const Donation = () => {
    return (
        <div>
            <h1 className='mt-5 text-danger'>Donate to Save</h1>
            <div> 
                <img className='mt-4 w-100' src={donation2} alt="" />
                <br />
               <img className='w-100 mt-4' src={donation1} alt="" />
            </div>

        </div>
    );
};

export default Donation;