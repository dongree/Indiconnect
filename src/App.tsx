import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Detail from './pages/Detail';
import ACTlist from './pages/ACTlist';
import RCUlist from './pages/RCUlist';
import Actimp from './pages/Actimp';
import RCUlist1 from './pages/RCUlist1';
import GeneUser from './pages/GeneUser';
import Pickmusi from './pages/Pickmusi';
import Themap from './pages/Themap';
import Keyword from './pages/Keyword';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/home2', element: <Home2 /> },
  { path: '/detail', element: <Detail /> },
  { path: '/applist', element: <ACTlist /> },
  { path: '/applist1', element: <RCUlist /> },
  { path: '/applist2', element: <RCUlist1 /> },
  { path: '/info', element: <Actimp /> },
  { path: '/geneuser', element: <GeneUser/>},
  { path: '/pickmusi', element: <Pickmusi/>},
  { path: '/tema', element: <Themap/>},
  { path: '/keyword', element: <Keyword/>},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
