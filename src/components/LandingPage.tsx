import React from 'react';
import { useNavigate } from 'react-router-dom';
const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='bg'>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-6xl tagline'> Discover. Explore. Create. </p>
                <button className='btn text-lg font-semibold' onClick={() => navigate('/discover')}>
                        Dive in
                </button>
            </div>
        </div>
    )
}

export default LandingPage;