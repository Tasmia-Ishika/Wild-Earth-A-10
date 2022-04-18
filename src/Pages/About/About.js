import React from 'react';
import img from '../../images/Me/me.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='mt-4 text-danger text-center'>About</h1>
            <div>
                <h2 className='mt-5 text-primary text-center'>Tasmia Islam Ishika</h2>
            </div>
            <div>
                <img className='mx-5 mt-4 w-50' src={img} alt="" />
            </div>
            <div>
                <p className='m-5 p-3 fw-bold'>" The goal I have set for myself is to become a web developer. In the beginning of 2022 I have set my mind by saying it mo matter what I will not change my decision and I will not give up. I will try my best and will work so hard that I will be a complete Web developer by the ending of this course.Now All I am trying is to work hard my very best and not losing hope. In Sha Allah I am hoping to reach the place where I have imagined myself so many times. "</p>
            </div>
        </div>
    );
};

export default About;