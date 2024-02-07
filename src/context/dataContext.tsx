// src/context/dataContext.tsx
import React, { useState, useEffect } from 'react';
import { IData, DataContext } from '../@myTypes/data';
import { useCache } from './cacheContext';
import axios from 'axios';

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, dispatch] = React.useReducer((state: IData[], action: IData) => {
        return [...state, action];
    }, []);
    const [dataFetched, setDataFetched] = useState(false);
    const [loading, setLoading] = useState(true);
    const { getCache, setCache } = useCache();
    React.useEffect(() => {
        if (!dataFetched) {
            const cachedData = getCache('myApiData');

            if (cachedData) {
                cachedData.forEach((item: IData) => {
                    dispatch(item);
                });

                setDataFetched(true);
                setLoading(false);
            } else {
                const source = axios.CancelToken.source();
                const fetchData = async () => {
                    try {
                        const response = await axios.get('https://my-json-server.typicode.com/harshblip/mock/models', {
                            cancelToken: source.token,
                            timeout: 600 // Request timeout in milliseconds
                        });

                        response.data.forEach((item: IData) => {
                            dispatch(item);
                        });

                        setDataFetched(true);
                        setLoading(false);
                        setCache('myApiData', response.data);
                    } catch (error) {
                        console.error('Failed to fetch data: ', error);
                    }
                };
                fetchData();

                // Cancel the request if the component unmounts
                return () => {
                    source.cancel('Operation canceled by the user.');
                };
            }
        }
    }, []); // Add dataFetched to the dependency array


    if (loading) {
        return <div className='flex justify-center mt-44'>
            Hit refresh/shift+R to see an easter egg 😋
        </div>; // Display loading indicator while data is being fetched
    }

    return (
        <DataContext.Provider value={{ data, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;