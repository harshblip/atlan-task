// src/@types/data.d.ts
import React from "react";

export interface IData {
    id: number;
    logo: string;
    modelName: string;
    name: string;
    maker: string;
    type: string;
    accuracy: string;
    lastUpdated: string;
    availability: string;
    description: string;
    performanceMetrics: string;
    sampleCode: string;
    useCases: string;
    likes: number;
}

export const DataContext = React.createContext<{
    data: IData[];
    dispatch: React.Dispatch<IData>;
} | null>(null);