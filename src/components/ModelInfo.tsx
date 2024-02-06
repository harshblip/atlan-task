import React from "react";
import { DataContext } from '../@myTypes/data';
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ModelInfo: React.FC = () => {
    const { data } = React.useContext(DataContext)!;
    const { modelName } = useParams();
    console.log(modelName);
    const modelData = data.find(model => model.modelName === modelName);
    if (!modelData) {
        return <div>Model not found.</div>;
    }
    const pythonCode = `
        import requests
        import json

        # Replace these variables with actual values
        api_endpoint = 'https://api.example.com/text-analyzer'
        api_key = 'your_api_key'
        text_to_analyze = 'This is a sample text for analysis.'

        # Request headers with API key
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        }

        # Request payload
        payload = {
            'text': text_to_analyze
        }

        try:
            # Make a POST request to the text analyzer API
            response = requests.post(api_endpoint, headers=headers, json=payload)

            # Check if the request was successful (status code 200)
            if response.status_code == 200:
                # Parse and print the analysis results
                analysis_results = response.json()
                print('Analysis Results:')
                print(json.dumps(analysis_results, indent=2))
            else:
                # Print an error message if the request was not successful
                print(f'Error: {response.status_code} - {response.text}')

        except Exception as e:
            # Handle exceptions such as network errors
            print(f'An error occurred: {str(e)}')
    `;
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
        <div className="about-container overflow-auto shadow ">
            <div className=" ">
                <div className="flex flex-col p-7">
                    <p className="text-3xl font text-black/90"> {modelData.modelName} </p>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> maker: </p>
                        <p className="text-md text-gray-400 font-bold tracking-widest -mt-[0.052rem]"> {modelData.maker} </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> name: </p>
                        <p className="text-md text-gray-400 font-bold tracking-widest -mt-[0.052rem]"> {modelData.name} </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> last updated: </p>
                        <p className="text-md text-gray-400 font-bold tracking-widest -mt-[0.052rem]"> {modelData.lastUpdated} </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <p className="font-bold text-sm"> tags: </p>
                        <p className="text-md text-gray-400 font-bold -mt-[0.052rem]"> {modelData.tags} </p>
                    </div>
                    <hr
                        className="w-[18rem] mt-2 border"
                    />
                    <div className="flex justify-around ml-20">
                        <div className="flex space-x-2 mt-4">
                            <button className="flex p-3 border-2 border-pink-300 rounded-md hover:bg-pink-300 hover:border-white hover:rounded-md hover:text-white transition-all w-[7rem]"><span className="ml-2 material-symbols-outlined mr-2 hover:text-white">
                                favorite
                            </span> <p> {modelData.likes} </p> </button>
                        </div>
                        <div className="flex space-x-2 mt-4 ml-24">
                            <button className="flex p-3 border-2 border-gray-300 rounded-md hover:bg-gray-300 hover:border-white hover:rounded-md hover:text-white transition-all w-[7rem]"><span className="ml-4 material-symbols-outlined mr-2 hover:text-white">
                                diversity_2
                            </span> <p> {modelData.usedBy} </p> </button>
                        </div>
                    </div>
                    <div className="flex flex-col space-x-2 mt-[2rem]">
                        <p className="font-bold text-lg underline mb-2"> Description </p>
                        <p className="text-md text-gray-400 font-bold">
                            {modelData.description}
                        </p>
                    </div>
                    <div className="flex flex-col space-x-2 mt-[2rem] ">
                        <p className="font-bold text-lg underline mb-2"> Use Cases: </p>
                        <p className="text-md text-gray-400 font-bold">
                            {modelData.description}
                        </p>
                    </div>
                </div>
            </div>
            <img src = {modelData.logo} alt={modelData.modelName}/>
        </div>
    )
}

export default ModelInfo