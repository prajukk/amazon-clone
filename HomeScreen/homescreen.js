import React from 'react';
import './homescreen.css';
import Homebanner from './HomeBanner/homebanner';
import HomeDetails from './HomeDetails/homedetails';
import Footer from '../../components/footer/footer';

const HomeScreen = () => {
  return (
    <div  className='HomeScreen'>
      <Homebanner/>
      <HomeDetails/>
      <Footer/>
    </div>
  )
}

export default HomeScreen;