// src/context/dataContext.tsx
import * as React from 'react';
import { IData, DataContext } from '../@myTypes/data';
import axios from 'axios';

const DataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
 const [data, dispatch] = React.useReducer((state: IData[], action: IData) => {
    // Implement your state update logic here
    return [...state, action];
 }, []);

 React.useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get('https://my-json-server.typicode.com/harshblip/mock/models');
       response.data.forEach((item: IData) => {
         dispatch(item);
       });
     } catch (error) {
       console.error('Failed to fetch data: ', error);
     }
   };
   fetchData();
 }, [dispatch]);

 return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
 );
};

export default DataProvider;