import React from 'react';
import photographer from '../../../images/photographer/photographer.jpg'
const PhotographerDetails = () => {
    return (
        <div className='mt-10 gap-3'>
            <h1 className='mt-5 text-danger'>Photographer</h1>
            <div className='mt-5'>
                <div className=''>
                    <img className='w-50' src={photographer} alt="" />
                    <h2 className='fw-bold mt-2'>Simon Richard</h2>
                    <p><small className='text-primary'>Wildlife Photographer</small></p>
                </div>
                <div>
                    <p>Simon Richard is an Internatinal Award Winning Wildlife Photographer.His Famous "Prey with Royalty of Royal Bengal" is known as his best work. Simon Traveled internationally covering from South Africa's Wildlife to Alaska's Wildlife.His capture always indicate a special hidden message about our nature.According to Simon , <span className='text-primary fw-bold'>"Our Nature Gives us Best If We are Capable Enough to see them"</span></p>
                </div>
            </div>
        </div>
    );
};

export default PhotographerDetails;