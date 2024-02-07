import React, { useState } from "react";
import { DataContext } from '../@myTypes/data';
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeSnippets } from "../assets/helper/codeSnippets";
import ProgressiveImg from "./ProgressiveImg";

const ModelInfo: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { data } = React.useContext(DataContext)!;
    const { modelName } = useParams();

    console.log(modelName);

    const preloadImages = (srcArray: string[]): void => {
        const promises = srcArray.map((src) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve();
                img.onerror = () => reject();
            });
        });

        Promise.all(promises).then(() => setIsLoading(false)).catch((error) => {
            console.error('Error preloading images:', error);
            setIsLoading(false);
        });
    };

    const imageUrls = data.flatMap(item => [item.logo, item.blurLogo]);

    React.useEffect(() => {
        preloadImages(imageUrls);
    }, [imageUrls]);

    const modelData = data.find(model => model.modelName === modelName);
    if (!modelData) {
        return <div>Model not found.</div>;
    }

    const containerStyle = {
        width: '400px',
        height: '400px',
        margin: '20px',
        overflowY: 'auto' as 'auto',
        overflowX: 'auto' as 'auto',
        scrollbarWidth: 'none' as 'none',
        msOverflowStyle: 'none' as 'none',
    };

    return (
        <div className="about-container no-scrollbar overflow-auto shadow ">
            <div>
                {/* <ProgressiveImg
                    src={modelData.logo}
                    placeholderSrc={modelData.blurLogo}
                /> */}
                <div className="flex flex-col p-7">
                    <p className="text-3xl font text-black/90"> {modelData.modelName} </p>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> maker: </p>
                        <p className="text-md text-[#415a77] font-bold tracking-widest -mt-[0.052rem]"> {modelData.maker} </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> name: </p>
                        <p className="text-md text-[#415a77] font-bold tracking-widest -mt-[0.052rem]"> {modelData.name} </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> last updated: </p>
                        <p className="text-md text-[#415a77] font-bold tracking-widest -mt-[0.052rem]"> {modelData.lastUpdated} </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> tags: </p>
                        <p className="text-md text-[#415a77] font-bold -mt-[0.052rem]"> {modelData.tags} </p>
                    </div>
                    <hr
                        className="w-[18rem] mt-2 border"
                    />
                    <div className="flex justify-around ml-4">
                        <div className="flex space-x-2 mt-4">
                            <button className="flex p-3 border-2 border-pink-300 rounded-md hover:bg-pink-300 hover:border-white hover:rounded-md hover:text-white transition-all w-[7rem]"><span className="ml-2 material-symbols-outlined mr-2 hover:text-white">
                                favorite
                            </span> <p> {modelData.likes} </p> </button>
                        </div>
                        <div className="flex space-x-2 mt-4 ml-4">
                            <button className="flex p-3 border-2 border-gray-300 rounded-md hover:bg-gray-300 hover:border-white hover:rounded-md hover:text-white transition-all w-[7rem]"><span className="ml-4 material-symbols-outlined mr-2 hover:text-white">
                                diversity_2
                            </span> <p> {modelData.usedBy} </p> </button>
                        </div>
                    </div>
                    <hr
                        className="w-[18rem] border mt-8 ml-20"
                    />
                    <div className="flex flex-col space-x-2 mt-[3rem]">
                        <p className="font-bold text-lg underline mb-2"> Description </p>
                        <p className="text-md text-[#415a77] font-bold">
                            {modelData.description}
                        </p>
                    </div>
                    <div className="flex flex-col space-x-2 mt-[2rem] ">
                        <p className="font-bold text-lg underline mb-2"> Use Cases: </p>
                        <p className="text-md text-[#415a77] font-bold">
                            {modelData.description}
                        </p>
                    </div>
                    <p className="font-bold text-lg underline mb-2 mt-[2rem]"> Sample Code: </p>
                    <SyntaxHighlighter
                        language="python"
                        style={vscDarkPlus}
                        customStyle={containerStyle}
                    >
                        {codeSnippets[modelData.id - 1]}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}

export default ModelInfo