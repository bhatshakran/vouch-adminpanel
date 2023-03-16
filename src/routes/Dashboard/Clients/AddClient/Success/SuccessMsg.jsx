import React from 'react';
import { Link } from 'react-router-dom';

const SuccessMsg = () => {
  return (
    <div className='bg-white py-3 px-3 mt-2 rounded-3 shadow-sm'>
      <div className='d-flex gap-3 flex-wrap align-items-center justify-content-between'>
        <div className='d-flex gap-3 align-items-center'>
          <div>
            <svg
              width='20'
              height='20'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='my-0'
            >
              <rect width='32' height='32' rx='16' fill='#12B690' />
              <path
                d='M12.9394 19.7046L9.62578 16.3909C9.25336 16.0185 8.65175 16.0185 8.27932 16.3909C7.90689 16.7634 7.90689 17.365 8.27932 17.7374L12.271 21.729C12.6434 22.1015 13.245 22.1015 13.6174 21.729L23.7207 11.6258C24.0931 11.2534 24.0931 10.6517 23.7207 10.2793C23.3483 9.90689 22.7466 9.90689 22.3742 10.2793L12.9394 19.7046Z'
                fill='white'
              />
            </svg>
          </div>

          <div>
            <h2 className='nunito fw-bold f-18 bluishblack my-0'>
              You have successfully added Infosys.
            </h2>
          </div>
        </div>
        <div className=' d-flex flex-wrap gap-4 nunito'>
          <Link
            to='/clients/'
            className='btn lightbtnbg fw-bold  primarycolor d-flex gap-2 align-items-center f-14 shadow-sm'
          >
            <span className='bluishblack' style={{ textDecoration: 'none' }}>
              Go to Client Master
            </span>
          </Link>
          <Link
            to='/add/createprofile'
            className='btn primarybg  text-white d-flex gap-2 align-items-center f-14 shadow-sm'
          >
            <span className='text-white' style={{ textDecoration: 'none' }}>
              Add More Clients
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessMsg;
