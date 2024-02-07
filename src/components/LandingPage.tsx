import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const LandingPage: React.FC = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const Text = styled.div`
        font-weight: 700;
        font-size: 3.75rem/* 60px */;
        line-height: 1;
        margin-top: 6rem;
        margin-bottom: 6rem;
    `

    const navigate = useNavigate();
    return (
        <div className='bg'>
            <Container>
                <Text> Discover. Explore. Create. </Text>
                <button className='btn text-lg font-semibold' onClick={() => navigate('/discover')}>
                        Dive in
                </button>
            </Container>
        </div>
    )
}

export default LandingPage;