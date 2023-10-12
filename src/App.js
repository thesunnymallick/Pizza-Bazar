import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Fotter from './components/Fotter';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
      <Toaster />
    </>
  );
};

export default App;
