import React, { useState } from "react";
import { DataContext } from '../@myTypes/data';
import { useParams } from "react-router-dom";
import { codeSnippets } from "../assets/helper/codeSnippets";

const ModelInfo: React.FC = () => {
    const { data } = React.useContext(DataContext)!;
    const { modelName } = useParams();

    console.log(modelName);

    const [modelData, setModelData] = useState(() => {
        const storedData = localStorage.getItem('modelData');
        if (storedData) {
            return JSON.parse(storedData);
        }
        // Fallback to data from DataContext if not in localStorage
        return data.find(model => model.modelName === modelName);
    });

    // Update localStorage whenever modelData changes
    React.useEffect(() => {
        if (modelData) {
            localStorage.setItem('modelData', JSON.stringify(modelData));
        }
    }, [modelData]);

    // Clear localStorage when the component unmounts
    React.useEffect(() => {
        return () => {
            localStorage.removeItem('modelData');
        };
    }, []); // Empty dependency array ensures this runs only on mount and unmount

    return (
        <div className="p-4 absolute">
            <p className="text-2xl"> {modelData.modelName} </p>
            <div className="flex mt-4">
                <p className="font-bold text-md mr-2"> maker: </p>
                <p className="text-lg -mt-[0.08rem]"> {modelData.maker} </p>
            </div>
            <div className="flex mt-4">
                <p className="font-bold text-md mr-2"> name: </p>
                <p className="text-lg -mt-[0.08rem]"> {modelData.name} </p>
            </div>
            <div className="flex mt-4">
                <p className="font-bold text-md mr-2"> last updated: </p>
                <p className="text-lg -mt-[0.08rem]"> {modelData.lastUpdated} </p>
            </div>
            <div className="flex mt-4">
                <p className="font-bold text-md mr-2"> tags: </p>
                <p className="text-lg -mt-[0.08rem]"> {modelData.tags} </p>
            </div>
            <hr
                className="mt-4 border-2 text-black"
            />
            <div className="flex mt-6 space-x-12">
                <button className="flex border-2 border-pink-300 rounded-md hover:bg-pink-300 hover:border-white hover:rounded-md hover:text-white transition-all p-4">
                    <span className="material-symbols-outlined mr-1"> favorite </span>
                    :
                    <p className="ml-2"> {modelData.likes} </p>
                </button>
                <button className="flex border-2 border-gray-300 rounded-md hover:bg-gray-300 hover:border-white hover:rounded-md hover:text-white transition-all p-4">
                    <span className="material-symbols-outlined mr-1"> diversity_2 </span>
                    :
                    <p className="ml-2"> {modelData.usedBy} </p>
                </button>
            </div>
            <hr
                className="mt-6 border-2"
            />
            <div className="mt-4">
                <p className="font-bold text-md mr-2 text-lg"> Description </p>
                <p className="text-lg -mt-[0.08rem]"> {modelData.description} </p>
            </div>
            <div className="mt-4">
                <p className="font-bold text-md mr-2 text-lg"> Use Cases </p>
                <p className="text-lg -mt-[0.08rem]"> {modelData.useCases} </p>
            </div>
            <div className="mt-4">
                <p className="font-bold text-lg mr-2 mb-4"> Sample Code </p>
                <pre className="text-lg -mt-[0.08rem] text-white bg-black/90"> {codeSnippets[modelData.id - 1]} </pre>
            </div>
        </div>
    )
}

export default ModelInfo