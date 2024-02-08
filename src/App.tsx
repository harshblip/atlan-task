import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DataProvider from './context/dataContext';
import StateProvider from './context/stateProvider';
import CacheProvider from './context/cacheContext';

const Navbar = lazy(() => import("./components/Navbar"));
const Discover = lazy(() => import('./components/Discover'));
const ModelInfo = lazy(() => import('./components/ModelInfo'));

function App() {
  return (
    <Suspense
      fallback={<div className='flex justify-center mt-44'> Hit refresh/shift+R to see an easter egg 😋  </div>}
    >
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
    </Suspense>
  );
}

export default App;
