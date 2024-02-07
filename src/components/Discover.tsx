import React, { useState, Suspense, lazy } from "react";
import SortButton from './Sort';
import FilterButton from "./Filter";

const LeoComponent = lazy(() => import('./Card'));

const Discover: React.FC = () => {
    const [activeButton, setActiveButton] = useState(() => {
        const saved = localStorage.getItem('activeButton');
        return saved ? JSON.parse(saved) : 'ai'; // Default to 'featured' if nothing is saved
    });

    return (
        <>
            <div className="container">
                <div className="flex justify-around">
                    <button
                        className={`custom-button ${activeButton === 'featured' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveButton('featured');
                            localStorage.setItem('activeButton', JSON.stringify('featured'));
                        }}
                    >
                        Featured 🔥
                    </button>
                    <button
                        className={`custom-button ${activeButton === 'ai' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveButton('ai');
                            localStorage.setItem('activeButton', JSON.stringify('ai'));
                        }}
                    >
                        AI / LLM Models ⚙
                    </button>
                </div>
                <div className="flex mt-2 justify-center space-x-8">
                    <SortButton />
                    <FilterButton />
                </div>
                <div className="cards">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LeoComponent />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default Discover;