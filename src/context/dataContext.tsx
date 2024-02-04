// src/context/dataContext.tsx
import React, { useState } from 'react';
import { IData, DataContext } from '../@myTypes/data';
import axios from 'axios';

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, dispatch] = React.useReducer((state: IData[], action: IData) => {
        // Implement your state update logic here
        return [...state, action];
    }, []);
    const [dataFetched, setDataFetched] = useState(false);
    const [loading, setLoading] = useState(true);
    React.useEffect(() => {
        if (!dataFetched) {
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://my-json-server.typicode.com/harshblip/mock/models');
                    response.data.forEach((item: IData) => {
                        dispatch(item);
                    });
                    setDataFetched(true); // Set the flag here
                    setLoading(false);
                } catch (error) {
                    console.error('Failed to fetch data: ', error);
                }
            };
            fetchData();
        }
    }, [dispatch, dataFetched]); // Add dataFetched to the dependency array

    if (loading) {
        return <div className='flex justify-center items-center'>
            Loading...
        </div>; // Display loading indicator while data is being fetched
    }

    return (
        <DataContext.Provider value={{ data, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;