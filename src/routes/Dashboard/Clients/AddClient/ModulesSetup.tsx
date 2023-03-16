import React from 'react';
import ModuleSidebar from './ModuleSidebar';

const ModulesSetup = () => {
  return (
    <section className='bg-white px-2  py-4 rounded-bottom-3 shadow-s,'>
      <div className='mt-3'>
        <div className='mx-3'>
          <h2
            className='nunito my-0 fw-bold sm-f-18'
            style={{ fontSize: '20px' }}
          >
            Modules Setup
          </h2>
          <p className='secondarycolor nunito ' style={{ fontSize: '14px' }}>
            Select the modules that the client can use.
          </p>
        </div>

        <div className='container d-flex justify-content-start w-100'>
          <ModuleSidebar />
        </div>
      </div>
    </section>
  );
};

export default ModulesSetup;
