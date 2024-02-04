import React, { useState } from "react";
import { StateContext } from "../@myTypes/state";

const Sort: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const { sort, setSort } = React.useContext(StateContext)!;
    return (
        <div className="dropdown">
            <div
                onClick={(e) => {
                    setIsActive(!isActive);
                }}
                className="dropdown-btn"
            >
                {sort}
            </div>
            <div
                className="dropdown-content"
                style={{ display: isActive ? "block" : "none" }}
            >
                <div
                    onClick={(e) => {
                        setSort("Likes");
                        setIsActive(!isActive);
                    }}
                    className="item"
                >
                    Likes❤
                </div>
                <div
                    className="item"
                    onClick={(e) => {
                        setSort("Accuracy");
                        setIsActive(!isActive);
                    }}
                >
                    Accuracy🎯
                </div>
            </div>
        </div>
    )
}

export default Sort;