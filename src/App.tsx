import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import ModelInfo from './components/ModelInfo';
import DataProvider from './context/dataContext'

function App() {
  return (
    <DataProvider>
      {/* <Navbar />
      <LandingPage /> */}
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/:modelName" element={<ModelInfo />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
