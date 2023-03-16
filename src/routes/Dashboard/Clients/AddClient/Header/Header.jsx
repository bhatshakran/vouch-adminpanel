import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname.split('/').includes('add'));
  return (
    <div
      className={`bg-white d-flex flex-wrap   w-100 justify-content-start pt-4  nunito mt-4 rounded-top-3 shadow-sm ${
        pathname.split('/').includes('success') && 'd-none'
      }`}
      style={{ color: '#939596' }}
    >
      <Link
        to='/add/createprofile'
        className={`w-50 mb-4 lg-mb-0 lg-w-25 d-flex px-3 justify-content-start justify-content-lg-center  pb-4 ${
          pathname.split('/').includes('createprofile') &&
          'primarycolor primaryborder'
        } `}
        style={{ textDecoration: 'none', color: '#939596' }}
      >
        <p
          className='my-0 d-flex gap-3 sm-gap-1  xs-f-10'
          style={{ fontSize: '14px' }}
        >
          <span>01</span>
          <span>CREATE PROFILE</span>
        </p>
      </Link>
      <Link
        to='/add/paymentsetup'
        className={`w-50 lg-w-25 mb-4 lg-mb-0 pb-2 d-flex px-3 justify-content-start justify-content-lg-center ${
          pathname.split('/').includes('paymentsetup') &&
          'primarycolor primaryborder'
        }`}
        style={{ textDecoration: 'none', color: '#939596' }}
      >
        <p
          className='my-0 d-flex sm-gap-1 gap-3 xs-f-10'
          style={{ fontSize: '14px' }}
        >
          <span>02</span>
          <span>PAYMENT SETUP</span>
        </p>
      </Link>
      <Link
        to='/add/themesetup'
        className={`w-50 lg-w-25 mb-4  lg-mb-0 pb-2 d-flex px-3 justify-content-start justify-content-lg-center ${
          pathname.split('/').includes('themesetup') &&
          'primarycolor primaryborder'
        }`}
        style={{ textDecoration: 'none', color: '#939596' }}
      >
        <p
          className='my-0 d-flex gap-3 sm-gap-1  xs-f-10'
          style={{ fontSize: '14px' }}
        >
          <span>03</span>
          <span>THEME SETUP</span>
        </p>
      </Link>
      <Link
        to='/add/modulesetup'
        className={`w-50 lg-w-25 mb-4  lg-mb-0 pb-2 d-flex px-3 justify-content-start justify-content-lg-center ${
          pathname.split('/').includes('modulesetup') &&
          'primarycolor primaryborder'
        }`}
        style={{ textDecoration: 'none', color: '#939596' }}
      >
        <p
          className='my-0 d-flex gap-3 sm-gap-1  xs-f-10'
          style={{ fontSize: '14px' }}
        >
          <span>04</span>
          <span>MODULES SETUP</span>
        </p>
      </Link>
    </div>
  );
};

export default Header;
