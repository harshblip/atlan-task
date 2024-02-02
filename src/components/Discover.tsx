import React, { useState, useEffect } from "react";

interface Model {
    id: number;
    logo: string;
    modelName: string;
    name: string;
    maker: string;
    accuracy: string;
    lastUpdated: string;
    availability: string;
    description: string;
    performanceMetrics: string;
    sampleCode: string;
    useCases: string;
    likes: number;
}

const Discover: React.FC = () => {
    const [models, setModels] = useState<Model[]>([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/harshblip/mock/models')
          .then(response => response.json())
          .then(data => setModels(data))
          .catch(error => console.error(error));
     }, []); // passing an empty array so that its called only once

     console.log(models[0].logo);

    return (
        <div className="container">
            <div className="column">Featured</div>
            <div className="column">
                <p> AI / LLM Models </p>
                <div>
                <img src={models[0].logo} />
                    {/* <img src = {models[0].logo} alt = "logo" /> */}
                </div>
            </div>
        </div>

    )
}

export default Discover;