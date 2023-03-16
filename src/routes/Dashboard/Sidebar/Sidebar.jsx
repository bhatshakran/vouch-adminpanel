import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../../../assets/Avatars.png';

const Sidebar = () => {
  const { pathname } = useLocation();
  const [mobileNav, setMobileNav] = useState(false);
  console.log(pathname.split('/').includes('add'));

  const showMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className='position-relative'>
      {/* desktop sidebar */}
      <div
        className='d-none d-lg-block bg-white  pt-4 position-relative vh-100 overflow-hidden'
        style={{ width: '336px', fontFamily: 'Nunito Sans' }}
      >
        <div className='mx-4'>
          <h2 className='fs-5 fw-bold'>Company name</h2>
          <div className='input-group mb-3 border rounded-pill px-3 mt-4'>
            <span
              className='input-group-text bg-white border-0 '
              id='basic-addon1'
              style={{ color: '#8E96A0', borderColor: '#e6e6e6' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </span>
            <input
              type='text'
              className='form-control border-0 px-0 myinput fw-normal '
              placeholder='Search modules'
              aria-label='Search modules'
              aria-describedby='basic-addon1'
              style={{
                color: '#8E96A0',
                borderColor: '#e6e6e6',
              }}
            />
          </div>
        </div>

        <div className='mx-4 mt-4'>
          <h4
            className='fw-bold'
            style={{
              color: '#B8BABC',
              fontSize: '14px',
              letterSpacing: '0.5px',
            }}
          >
            CLIENT MASTER
          </h4>

          <div className='d-flex flex-column gap-2'>
            <Link
              to='/clients'
              role='button'
              className={`  px-4 py-2 rounded-3 my-0  ${
                pathname.split('/').includes('clients') &&
                'primarybg text-white shadow-sm'
              }`}
              style={{
                fontSize: '16px',
                textDecoration: 'none',
                color: '#B8BABC',
              }}
            >
              View Clients
            </Link>
            <Link
              to='/add/createprofile'
              role='button'
              className={`px-4 py-2 rounded-3  my-0 ${
                pathname.split('/').includes('add') &&
                'primarybg text-white shadow-sm'
              }`}
              style={{
                fontSize: '16px',
                textDecoration: 'none',
                color: '#B8BABC',
              }}
            >
              Add Client
            </Link>
          </div>
        </div>

        <div className='position-absolute bottom-0 d-flex align-items-center justify-content-between w-100  py-2 pb-3 px-3'>
          <div className='d-flex align-items-center gap-3'>
            <div>
              <img src={avatar} alt='' width='48px' height='48px' />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-start h-100 '>
              <h6 style={{ fontSize: '16px' }} className='fw-bold my-0'>
                James Burton
              </h6>
              <p
                style={{ fontSize: '12px', color: '#233244' }}
                className='my-0'
              >
                iames@thevouch.digital
              </p>
            </div>
          </div>

          <div className='h-100'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.77778 1.77778H7.11111C7.6 1.77778 8 1.37778 8 0.888889C8 0.4 7.6 0 7.11111 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H7.11111C7.6 16 8 15.6 8 15.1111C8 14.6222 7.6 14.2222 7.11111 14.2222H1.77778V1.77778Z'
                fill='#8E96A0'
              />
              <path
                d='M15.6895 7.68892L13.2095 5.20892C12.9251 4.92447 12.4451 5.12003 12.4451 5.52003V7.11114H6.22287C5.73398 7.11114 5.33398 7.51114 5.33398 8.00003C5.33398 8.48892 5.73398 8.88892 6.22287 8.88892H12.4451V10.48C12.4451 10.88 12.9251 11.0756 13.2007 10.7911L15.6807 8.31114C15.8584 8.14225 15.8584 7.8578 15.6895 7.68892Z'
                fill='#8E96A0'
              />
            </svg>
          </div>
        </div>
      </div>
      {/* slider */}
      <div
        onClick={showMobileNav}
        role='button'
        className={`position-absolute d-lg-none primarybg text-white d-flex align-items-center p-2 slider shadow-sm ${
          mobileNav && 'displacedSlider '
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-sliders'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z'
          />
        </svg>
      </div>

      {/* mobile sidebar */}
      {mobileNav && (
        <div
          className=' bg-white position-fixed left-0 top-0  pt-4  vh-100 overflow-hidden mobilesidbar'
          style={{ width: '336px', fontFamily: 'Nunito Sans' }}
        >
          <div className='mx-4'>
            <h2 className='fs-5 fw-bold'>Company name</h2>
            <div className='input-group mb-3 border rounded-pill px-3 mt-4'>
              <span
                className='input-group-text bg-white border-0 '
                id='basic-addon1'
                style={{ color: '#8E96A0', borderColor: '#e6e6e6' }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </span>
              <input
                type='text'
                className='form-control border-0 px-0 myinput fw-normal '
                placeholder='Search modules'
                aria-label='Search modules'
                aria-describedby='basic-addon1'
                style={{
                  color: '#8E96A0',
                  borderColor: '#e6e6e6',
                }}
              />
            </div>
          </div>

          <div className='mx-4 mt-4'>
            <h4
              className='fw-bold'
              style={{
                color: '#B8BABC',
                fontSize: '14px',
                letterSpacing: '0.5px',
              }}
            >
              CLIENT MASTER
            </h4>

            <div className='d-flex flex-column gap-2'>
              <Link
                to='/clients'
                onClick={showMobileNav}
                role='button'
                className={`  px-4 py-2 rounded-3 my-0  ${
                  pathname.split('/').includes('clients') &&
                  'primarybg text-white shadow-sm'
                }`}
                style={{
                  fontSize: '16px',
                  textDecoration: 'none',
                  color: '#B8BABC',
                }}
              >
                View Clients
              </Link>
              <Link
                to='/add/createprofile'
                onClick={showMobileNav}
                role='button'
                className={`px-4 py-2 rounded-3  my-0 ${
                  pathname.split('/').includes('add') &&
                  'primarybg text-white shadow-sm'
                }`}
                style={{
                  fontSize: '16px',
                  textDecoration: 'none',
                  color: '#B8BABC',
                }}
              >
                Add Client
              </Link>
            </div>
          </div>

          <div className='position-absolute bottom-0 d-flex align-items-center justify-content-between w-100  py-2 pb-3 px-3'>
            <div className='d-flex align-items-center gap-3'>
              <div>
                <img src={avatar} alt='' width='48px' height='48px' />
              </div>
              <div className='d-flex flex-column justify-content-center align-items-start h-100 '>
                <h6 style={{ fontSize: '16px' }} className='fw-bold my-0'>
                  James Burton
                </h6>
                <p
                  style={{ fontSize: '12px', color: '#233244' }}
                  className='my-0'
                >
                  iames@thevouch.digital
                </p>
              </div>
            </div>

            <div className='h-100'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.77778 1.77778H7.11111C7.6 1.77778 8 1.37778 8 0.888889C8 0.4 7.6 0 7.11111 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H7.11111C7.6 16 8 15.6 8 15.1111C8 14.6222 7.6 14.2222 7.11111 14.2222H1.77778V1.77778Z'
                  fill='#8E96A0'
                />
                <path
                  d='M15.6895 7.68892L13.2095 5.20892C12.9251 4.92447 12.4451 5.12003 12.4451 5.52003V7.11114H6.22287C5.73398 7.11114 5.33398 7.51114 5.33398 8.00003C5.33398 8.48892 5.73398 8.88892 6.22287 8.88892H12.4451V10.48C12.4451 10.88 12.9251 11.0756 13.2007 10.7911L15.6807 8.31114C15.8584 8.14225 15.8584 7.8578 15.6895 7.68892Z'
                  fill='#8E96A0'
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
