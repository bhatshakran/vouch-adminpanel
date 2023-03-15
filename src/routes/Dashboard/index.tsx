import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <section className='d-flex'>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
