// @types/context.d.ts
import React from "react";

export interface IContext {
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<string>>;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const StateContext = React.createContext<IContext | undefined>(undefined);
