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
import Apply from './pages/Apply';
import Pay from './pages/Pay';
import Success from './pages/Success';
import Detail2 from './pages/Detail2';
import Pay2 from './pages/Pay2';
import UserMap from './components/userMap';
import UserMain from './components/userMain';
import Select from './pages/Select';

const router = createBrowserRouter([
  { path: '/', element: <Select /> },
  { path: '/home', element: <Home /> },
  { path: '/home2', element: <Home2 /> },
  { path: '/detail', element: <Detail /> },
  { path: '/applist', element: <ACTlist /> },
  { path: '/applist1', element: <RCUlist /> },
  { path: '/applist2', element: <RCUlist1 /> },
  { path: '/info', element: <Actimp /> },
  { path: '/geneuser', element: <GeneUser /> },
  { path: '/pickmusi', element: <Pickmusi /> },
  { path: '/tema', element: <Themap /> },
  { path: '/keyword', element: <Keyword /> },
  { path: '/apply', element: <Apply /> },
  { path: '/pay', element: <Pay /> },
  { path: '/success', element: <Success text="참가 신청 완료!" /> },
  { path: '/detail2', element: <Detail2 /> },
  { path: '/pay2', element: <Pay2 /> },
  { path: '/success2', element: <Success text="공연 예매 완료!" /> },
  // { path: '/test', element: <UserMap /> },
  { path: '/home3', element: <UserMain /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
