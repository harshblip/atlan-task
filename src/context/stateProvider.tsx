// context/SortProvider.tsx
import React, { useState } from 'react';
import { StateContext, IContext } from '../@myTypes/state';

const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [sort, setSort] = useState('Sort by');
   const [filter, setFilter] = useState('Filter by');

   const value: IContext = {
      sort,
      setSort,
      filter,
      setFilter
   };

   return (
      <StateContext.Provider value={value}>
         {children}
      </StateContext.Provider>
   )
};

export default StateProvider;