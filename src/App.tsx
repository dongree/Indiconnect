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
import Apply from './pages/Apply';
import Pay from './pages/Pay';
import Success from './pages/Success';
import Detail2 from './pages/Detail2';
import Pay2 from './pages/Pay2';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/home2', element: <Home2 /> },
  { path: '/detail', element: <Detail /> },
  { path: '/applist', element: <ACTlist /> },
  { path: '/applist1', element: <RCUlist /> },
  { path: '/applist2', element: <RCUlist1 /> },
  { path: '/info', element: <Actimp /> },
  { path: '/apply', element: <Apply /> },
  { path: '/pay', element: <Pay /> },
  { path: '/success', element: <Success /> },
  { path: '/detail2', element: <Detail2 /> },
  { path: '/pay2', element: <Pay2 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
