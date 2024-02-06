// src/@types/data.d.ts
import React from "react";

export interface IData {
    id: number;
    logo: string;
    blurLogo: string;
    modelName: string;
    name: string;
    maker: string;
    type: string;
    accuracy: string;
    lastUpdated: string;
    description: string;
    sampleCode: string;
    UseCases: string;
    usedBy: string,
    tags: string;
    likes: number;
}

export const DataContext = React.createContext<{
    data: IData[];
    dispatch: React.Dispatch<IData>;
} | null>(null);