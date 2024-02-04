import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import ModelInfo from './components/ModelInfo';
import DataProvider from './context/dataContext';
import StateProvider from './context/stateProvider';
import CacheProvider from './context/cacheContext';

function App() {
  return (
    <CacheProvider>
      <StateProvider>
        <DataProvider>
          <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/discover/:modelName" element={<ModelInfo />} />
          </Routes>
        </DataProvider>
      </StateProvider>
    </CacheProvider>
  );
}

export default App;
