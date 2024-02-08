import React, { Suspense, lazy } from "react";
import SortButton from './Sort';
import FilterButton from "./Filter";
import { StateContext } from "../@myTypes/state";

const LeoComponent = lazy(() => import('./Card'));

const Discover: React.FC = () => {
    const { activeButton, setActiveButton } = React.useContext(StateContext)!;

    return (
        <>
            <div className="container">
                <div className="flex md:-ml-[6rem] md:space-x-28 justify-around">
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
                    <Suspense fallback={<div className='flex justify-center mt-44'>Hit refresh/shift+R to see an easter egg 😋</div>}>
                        <LeoComponent />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default Discover;