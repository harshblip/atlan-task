import React, { useState } from "react";
import Card from "./Card";
import SortButton from './Sort';
import FilterButton from "./Filter";


const Discover: React.FC = () => {
    const [activeButton, setActiveButton] = useState(() => {
        const saved = localStorage.getItem('activeButton');
        return saved ? JSON.parse(saved) : 'featured'; // Default to 'featured' if nothing is saved
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
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Discover;