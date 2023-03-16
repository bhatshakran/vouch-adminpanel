import React from 'react';
import InputGroup from '../../../../components/InputGroup';
import SelectInput from '../../../../components/SelectInput';
import add from './images/addcom.png';

const CreateProfile = () => {
  return (
    <section className='bg-white px-2  py-4 rounded-bottom-3 shadow-s,'>
      <div className='mt-3'>
        <div className='mx-3'>
          <h2
            className='nunito my-0 fw-bold sm-f-18'
            style={{ fontSize: '20px' }}
          >
            Create Client Profile
          </h2>
          <p className='secondarycolor nunito ' style={{ fontSize: '14px' }}>
            Add some basic information related to the client.
          </p>
        </div>

        <div className='mx-3 d-flex flex-wrap align-items-center gap-5 my-5 '>
          <img src={add} alt='' />
          <div>
            <h4 className='nunito fw-normal' style={{ fontSize: '16px' }}>
              Company Logo
            </h4>
            <p className='nunito' style={{ fontSize: '12px' }}>
              Logo ratio should be 1:1 and should be 120 px X 120 px
            </p>
          </div>
        </div>
        <div className='container'>
          <div className=' d-flex flex-wrap justify-content-between gap-1 '>
            <InputGroup placeholder='Company Name' />
            <InputGroup placeholder='Website' />
            <SelectInput />
            <SelectInput />
            <InputGroup placeholder='Company Email Address' />
            <InputGroup placeholder='Mobile Number' />
            <SelectInput />
            <SelectInput />
            <InputGroup placeholder='GST Number' />
          </div>
        </div>

        <div className='mt-3 container d-flex flex-wrap gap-4 nunito'>
          <button className='btn primarybg  text-white d-flex gap-2 align-items-center'>
            <span>Save & Continue</span>
            <span>
              <svg
                width='8'
                height='10'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.735818 11.765C1.04917 12.0783 1.55436 12.0783 1.86771 11.765L7.18186 6.45084C7.43126 6.20144 7.43126 5.79856 7.18186 5.54916L1.86771 0.235012C1.55436 -0.0783373 1.04917 -0.0783373 0.735818 0.235012C0.422468 0.548361 0.422468 1.05356 0.735818 1.36691L5.36571 6.0032L0.729423 10.6395C0.422468 10.9464 0.422468 11.458 0.735818 11.765Z'
                  fill='white'
                />
              </svg>
            </span>
          </button>
          <button className='btn primarycolor  text-white d-flex gap-2 align-items-end'>
            <span className='my-0'>
              <svg
                width='10'
                height='12'
                viewBox='0 0 10 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.93027 2.04675V0.311866C4.93027 0.0320453 4.59449 -0.104756 4.40172 0.0942276L2.0388 2.45094C1.91443 2.5753 1.91443 2.76807 2.0388 2.89243L4.3955 5.24914C4.59449 5.4419 4.93027 5.3051 4.93027 5.02528V3.2904C7.24967 3.2904 9.08405 5.41703 8.57415 7.82349C8.2819 9.23502 7.13774 10.373 5.73242 10.6652C3.51252 11.1316 1.53512 9.60812 1.23664 7.54989C1.19312 7.25141 0.93195 7.02134 0.627257 7.02134C0.254163 7.02134 -0.0443118 7.3509 0.00543407 7.724C0.390964 10.4538 2.99018 12.4747 5.93141 11.9026C7.87149 11.5233 9.43227 9.96256 9.81158 8.02247C10.4272 4.83252 8.00208 2.04675 4.93027 2.04675Z'
                  fill='#686687'
                />
              </svg>
            </span>
            <span
              className='my-0 fw-bold secondarycolor'
              style={{ fontSize: '14px' }}
            >
              Reset
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateProfile;
