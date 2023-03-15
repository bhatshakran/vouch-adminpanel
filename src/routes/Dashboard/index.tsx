import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <section className='d-flex'>
      <Sidebar />
      <div style={{ backgroundColor: '#EAECF0' }} className='outl py-3'>
        <Navbar />
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
