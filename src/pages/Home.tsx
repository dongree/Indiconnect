import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Map from '../components/Map';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
export default function Home() {
  return (
    <div>
      <HomeHeader className='header'/>
      <Map className='map' />
      <Footer/>
    </div>

  );
}
