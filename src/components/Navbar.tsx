import React from 'react'
import ai from '../assets/images/ai.png';
import LandingPage from '../components/LandingPage';

// deferring css. so that html loads first to increase fcp

const Navbar: React.FC = () => {
    return (
        <>
            <div className='navbar'>
                <div className='flex'>
                    <img src={ai} alt='logo' width={40} />
                    <p className='mt-1 ml-1 text-2xl font-semibold'>AI
                        <span><code> Playground </code>
                        </span>
                    </p>
                    <div className="blinking-square"></div>
                </div>
                <span><p> Features </p></span>
                <span><p> Github </p></span>
                <span><p> Home </p></span>
                <span><p> Contact Us </p></span>
            </div>
            <LandingPage />
        </>
    );
};

export default Navbar;