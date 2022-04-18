import React from 'react';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1 className='mt-4 text-danger text-center'>Blogs</h1>
            <div>
                <h1 className='text-center mt-3 text-primary p-2'>What is the difference between authentication and Authorization?</h1>
                <p className='m-3 fw-bold p-4'>ANSWER:  Authentication is used for verifying an individual person.In order to verify a user we can use different types of authentication systems...Authorization is use to verify what specific applications,data and files an user has an access.By using authorization it has become very simple to check whether user already had a existing account or not..</p>
            </div>
            <div>
                <h1 className='text-center mt-3 text-primary p-2'>Why are you using Firebase? What other options do you have to implement authentication?</h1>
                <p className='m-3 fw-bold p-4'>The Firebase Database helps us to build rich, collaborative applications by allowing secure access to the database directly from client. Data is persisted locally and even giving the user a responsive experience....  Usually we can authenticate through a user name and password. But there are other ways too.They are cards, retina scans, voice recognition, and fingerprints
                </p>
            </div>
            <div>
                <h1 className='text-center mt-3 text-primary p-2'>What other services does firebase provide other than authentication?</h1>
                <p className='m-3 fw-bold p-4'>ANSWER: Firebase provide many services other than authentication.. They are Analytics,Cloud Messaging,Authentication,Realtime Database,Storage,Hosting,Remote Configuration,Test Lab and Crash Reporting</p>
            </div>
        </div>
    );
};

export default Blogs;