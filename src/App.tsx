import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Detail from './pages/Detail';
import Apply from './pages/Apply';
import Pay from './pages/Pay';
import Success from './pages/Success';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/home2', element: <Home2 /> },
  { path: '/detail', element: <Detail /> },
  { path: '/apply', element: <Apply /> },
  { path: '/pay', element: <Pay /> },
  { path: '/success', element: <Success /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
