import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const AddClient = () => {
  return (
    <div className='mx-3 '>
      <Header />
      <Outlet />
    </div>
  );
};

export default AddClient;
