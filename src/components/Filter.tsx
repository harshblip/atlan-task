import React, { useState } from "react";
import { StateContext } from "../@myTypes/state";

const Filter: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const { filter, setFilter } = React.useContext(StateContext)!;
    return (
        <div className="dropdown">
            <div
                onClick={(e) => {
                    setIsActive(!isActive);
                }}
                className="dropdown-btn"
            >
                {filter}
            </div>
            <div
                className="dropdown-content"
                style={{ display: isActive ? "block" : "none" }}
            >
                <div
                    onClick={(e) => {
                        setFilter("Organization");
                        setIsActive(!isActive);
                    }}
                    className="item"
                >
                    Organization🏨
                </div>
                <div
                    className="item"
                    onClick={(e) => {
                        setFilter("Person");
                        setIsActive(!isActive);
                    }}
                >
                    Person🧔
                </div>
            </div>
        </div>
    )
}

export default Filter;