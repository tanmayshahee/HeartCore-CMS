import React from 'react';
import Header from './components/Header';
import LeftSideMenu from './components/LeftSideMenu';
import Footer from './components/Footer';
import RouteLoaderWrapper from './components/RouteLoaderWrapper';
import './App.css';

const App = () => {
  return (
    <div className='app-page_wrapper'>
      <Header />
      <LeftSideMenu />
      <RouteLoaderWrapper />
      <Footer />
    </div>
  );
};

export default App;
