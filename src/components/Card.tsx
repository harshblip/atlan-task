import React from "react";
import { DataContext } from '../@myTypes/data';

const Card: React.FC = () => {
    const { data, dispatch } = React.useContext(DataContext)!;
    return (
        <>
            {
                data.map((x, i) => {
                    return (
                        <div className="card">
                            <div className="flex">
                                <div className="border w-[6rem] p-4 text-center">
                                    <img src={x.logo}
                                        alt={x.maker}
                                        width={50}
                                    />
                                    <p className="text-sm"> {x.modelName} </p>
                                </div>
                                <div className="border w-full text-start p-4">
                                    <p className="text-lg text-gray-700 font-semibold"> {x.name} </p>
                                    <p className="text-xs text-gray-300 font-bold"> {x.maker} </p>
                                    <div className="flex gap-2">
                                        <p className="text-sm text-gray-700"> {x.lastUpdated} </p>
                                        <svg height="18" width="10">
                                            <circle cx="5" cy="10" r="3" stroke-width="3" fill="gray" />
                                        </svg>
                                        <p className={`text-sm font-bold ${+x.accuracy <= 30 ? 'red' : +x.accuracy <= 60 ? 'yellow' : 'green'}`}>
                                            {x.accuracy}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;