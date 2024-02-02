import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className='bg'>
            <div className='flex flex-col items-center'>
            <p className='font-bold text-6xl tagline'> Discover. Explore. Create. </p>
            <button className='btn text-lg font-semibold'>
                Dive in
            </button>
            </div>
        </div>
    )
}

export default LandingPage;