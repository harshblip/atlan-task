import React, { useEffect, useState, Suspense } from "react";
import { DataContext, IData } from '../@myTypes/data';
import { StateContext } from "../@myTypes/state";
import { filterData, sortData } from "../assets/helper/util";
import { useNavigate } from "react-router-dom";

interface IDataWithScore extends IData {
    score: number;
}

const Card: React.FC = () => {
    const { data } = React.useContext(DataContext)!;
    const [filteredData, setFilteredData] = useState([...data]);
    const { sort, activeButton, filter } = React.useContext(StateContext)!;
    const navigate = useNavigate();
    console.log(activeButton);

    useEffect(() => {
        let tempData = data.map((item: IData): IDataWithScore => ({
            ...item,
            score: (0.7 * item.likes) + (0.3 * item.usedBy),
        }));

        if (activeButton === 'featured') {
            const scoreThreshold = 600; // Set your specific score threshold here
            tempData = tempData.filter(item => item.score > scoreThreshold);
        } else {
            tempData = filterData(tempData, filter);
            tempData = sortData(tempData, sort);
        }

        setFilteredData(tempData);
    }, [data, sort, filter, activeButton]);


    return (
        <Suspense>
            {
                filteredData.map((x, i) => {
                    return (
                        <div className="card shadow" key={i}>
                            <div className="flex">
                                <div className=" w-[6rem] p-4 mt-4 text-center">
                                    <img src={x.logo}
                                        alt={x.maker}
                                        width={50}
                                    />
                                    <p className="text-sm mt-2 mr-1"> {x.modelName} </p>
                                </div>
                                <div className="w-full text-start p-4 ml-2">
                                    <p className="text-lg text-gray-700 font-semibold"> {x.name} </p>
                                    <p className="text-xs text-gray-300 font-bold"> {x.maker} </p>
                                    <div className="flex gap-2">
                                        <p className="text-sm text-gray-700"> {x.lastUpdated} </p>
                                        <svg height="18" width="10">
                                            <circle cx="5" cy="10" r="3" strokeWidth="3" fill="gray" />
                                        </svg>
                                        <p className={`text-sm font-bold ${+x.accuracy <= 30 ? 'red' : +x.accuracy <= 60 ? 'yellow' : 'green'}`}>
                                            {x.accuracy}%
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <button className="btn2"> Try it out </button>
                                        <button className="btn3 shadow" onClick={() => navigate(`/discover/${encodeURIComponent(x.modelName)}`)}> Know more  </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Suspense>
    )
}

export default Card;