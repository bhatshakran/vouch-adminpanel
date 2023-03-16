import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname.split('/').includes('add'));
  const splitArr = pathname.split('/');
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
          splitArr.includes('createprofile') && 'primarycolor primaryborder'
        } `}
        style={{ textDecoration: 'none', color: '#939596' }}
      >
        <p
          className='my-0 d-flex gap-3 sm-gap-1  xs-f-10'
          style={{ fontSize: '14px' }}
        >
          {splitArr.includes('paymentsetup') |
          splitArr.includes('themesetup') |
          splitArr.includes('modulesetup') ? (
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect y='0.5' width='20' height='20' rx='10' fill='#14CDA2' />
              <path
                d='M7.70457 13.2784L5.21934 10.7932C4.94002 10.5139 4.48881 10.5139 4.20949 10.7932C3.93017 11.0725 3.93017 11.5237 4.20949 11.803L7.20322 14.7968C7.48254 15.0761 7.93375 15.0761 8.21307 14.7968L15.7905 7.21934C16.0698 6.94002 16.0698 6.48881 15.7905 6.20949C15.5112 5.93017 15.06 5.93017 14.7807 6.20949L7.70457 13.2784Z'
                fill='white'
              />
            </svg>
          ) : null}
          <span>01</span>
          <span>CREATE PROFILE</span>
        </p>
      </Link>
      <Link
        to='/add/paymentsetup'
        className={`w-50 lg-w-25 mb-4 lg-mb-0 pb-2 d-flex px-3 justify-content-start justify-content-lg-center ${
          splitArr.includes('paymentsetup') && 'primarycolor primaryborder'
        }`}
        style={{ textDecoration: 'none', color: '#939596' }}
      >
        <p
          className='my-0 d-flex sm-gap-1 gap-3 xs-f-10'
          style={{ fontSize: '14px' }}
        >
          {splitArr.includes('themesetup') |
          splitArr.includes('modulesetup') ? (
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect y='0.5' width='20' height='20' rx='10' fill='#14CDA2' />
              <path
                d='M7.70457 13.2784L5.21934 10.7932C4.94002 10.5139 4.48881 10.5139 4.20949 10.7932C3.93017 11.0725 3.93017 11.5237 4.20949 11.803L7.20322 14.7968C7.48254 15.0761 7.93375 15.0761 8.21307 14.7968L15.7905 7.21934C16.0698 6.94002 16.0698 6.48881 15.7905 6.20949C15.5112 5.93017 15.06 5.93017 14.7807 6.20949L7.70457 13.2784Z'
                fill='white'
              />
            </svg>
          ) : null}
          <span>02</span>
          <span>PAYMENT SETUP</span>
        </p>
      </Link>
      <Link
        to='/add/themesetup'
        className={`w-50 lg-w-25 mb-4  lg-mb-0 pb-2 d-flex px-3 justify-content-start justify-content-lg-center ${
          splitArr.includes('themesetup') && 'primarycolor primaryborder'
        }`}
        style={{ textDecoration: 'none', color: '#939596' }}
      >
        <p
          className='my-0 d-flex gap-3 sm-gap-1  xs-f-10'
          style={{ fontSize: '14px' }}
        >
          {splitArr.includes('modulesetup') && (
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect y='0.5' width='20' height='20' rx='10' fill='#14CDA2' />
              <path
                d='M7.70457 13.2784L5.21934 10.7932C4.94002 10.5139 4.48881 10.5139 4.20949 10.7932C3.93017 11.0725 3.93017 11.5237 4.20949 11.803L7.20322 14.7968C7.48254 15.0761 7.93375 15.0761 8.21307 14.7968L15.7905 7.21934C16.0698 6.94002 16.0698 6.48881 15.7905 6.20949C15.5112 5.93017 15.06 5.93017 14.7807 6.20949L7.70457 13.2784Z'
                fill='white'
              />
            </svg>
          )}
          <span>03</span>
          <span>THEME SETUP</span>
        </p>
      </Link>
      <Link
        to='/add/modulesetup'
        className={`w-50 lg-w-25 mb-4  lg-mb-0 pb-2 d-flex px-3 justify-content-start justify-content-lg-center ${
          splitArr.includes('modulesetup') && 'primarycolor primaryborder'
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
