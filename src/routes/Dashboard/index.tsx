import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <section className='d-flex'>
      <Sidebar />
      <div>content</div>
    </section>
  );
};

export default Dashboard;
