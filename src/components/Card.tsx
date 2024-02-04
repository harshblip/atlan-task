import React, { useEffect, useState, Suspense } from "react";
import { DataContext } from '../@myTypes/data';
import { StateContext } from "../@myTypes/state";
import { filterData, sortData } from "../assets/helper/util";
import { useNavigate } from "react-router-dom";

const Card: React.FC = () => {
    const { data, dispatch } = React.useContext(DataContext)!;
    const [filteredData, setFilteredData] = useState([...data]);
    const { sort, setSort } = React.useContext(StateContext)!;
    const { filter, setFilter } = React.useContext(StateContext)!;
    const navigate = useNavigate();
    console.log(sort, filter);

    useEffect(() => {
        let tempData = [...data];

        tempData = filterData(tempData, filter);
        tempData = sortData(tempData, sort);

        setFilteredData(tempData);
    }, [data, sort, filter]);

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
                                        <button className="btn3 shadow" onClick={() => navigate('/discover/:modelName')}> Know more  </button>
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