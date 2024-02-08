import React from 'react'
import ai from '../assets/images/ai.png';
import LandingPage from '../components/LandingPage';

// deferring css. so that html loads first to increase fcp

const Navbar: React.FC = () => {
    return (
        <>
            <div className='navbar'>
                <div className='flex'>
                    <img src={ai} alt='logo' className='h-[2rem] w-[2rem]'/>
                    <p className='mt-1 ml-1 text-2xl font-semibold flex'>AI
                        <span><code className='ml-2'> Playground </code>
                        </span>
                    </p>
                    <div className=" blinking-square"></div>
                </div>
                <div className='invisible md:visible md:flex md:space-x-8'>
                    <span><p> Features </p></span>
                    <span><p> Github </p></span>
                    <span><p> Home </p></span>
                    <span><p> Contact Us </p></span>
                </div>
            </div>
            <LandingPage />
        </>
    );
};

export default Navbar;