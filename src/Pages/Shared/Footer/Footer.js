import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 p-3 mb-2 bg-dark text-white'>
            <p><small>Copyright ©️{year} All rights reserved by Ishika.</small></p>
           
        </footer>
    );
};

export default Footer;