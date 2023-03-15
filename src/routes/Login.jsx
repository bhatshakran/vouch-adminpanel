import React from 'react';
import rectbg from '../assets/rectbg.png';
import rectfront from '../assets/rectfront.png';

const Login = () => {
  return (
    <section className='d-flex align-items-center justify-content-center'>
      <div className='w-100 lg:w-50 vh-100 d-flex align-items-center justify-content-center position-relative px-5'>
        <div className='text-center w-100'>
          <h2
            className='fs-1 fw-bold'
            style={{ fontFamily: 'Nunito Sans', letterSpacing: '-0.5%' }}
          >
            Welcome
          </h2>

          <h6
            className=' lh-1 secondarycolor'
            style={{ fontWeight: '400', fontSize: '14px' }}
          >
            Enter your Username and Password{' '}
          </h6>

          <div className='mt-4 w-100'>
            <div className='input-group mb-3'>
              <span
                className='input-group-text bg-white border-end-0 '
                id='basic-addon1'
                style={{ color: '#e6e6e6', borderColor: '#e6e6e6' }}
              >
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.88201 8.06296C6.74926 8.06296 5.82104 7.70111 5.09735 6.97742C4.37365 6.25372 4.0118 5.3255 4.0118 4.19276C4.0118 3.04428 4.37365 2.10819 5.09735 1.3845C5.82104 0.660799 6.74926 0.29895 7.88201 0.29895C9.01475 0.29895 9.9469 0.660799 10.6785 1.3845C11.41 2.10819 11.7758 3.04428 11.7758 4.19276C11.7758 5.3255 11.41 6.25372 10.6785 6.97742C9.9469 7.70111 9.01475 8.06296 7.88201 8.06296ZM0 16.299V13.7267C0 13.0816 0.165192 12.5192 0.495575 12.0394C0.825959 11.5595 1.2586 11.1937 1.79351 10.942C2.86332 10.4543 3.89381 10.0925 4.88496 9.85647C5.87611 9.62048 6.87512 9.50249 7.88201 9.50249C8.90462 9.50249 9.90757 9.62442 10.8909 9.86827C11.8741 10.1121 12.8928 10.47 13.9469 10.942C14.4975 11.178 14.942 11.5359 15.2802 12.0158C15.6185 12.4956 15.7876 13.0659 15.7876 13.7267V16.299H0ZM1.86431 14.4346H13.8997V13.7739C13.8997 13.5379 13.825 13.3058 13.6755 13.0777C13.5261 12.8496 13.3412 12.6883 13.1209 12.5939C12.1455 12.122 11.2527 11.7994 10.4425 11.6264C9.63225 11.4533 8.77876 11.3668 7.88201 11.3668C7.00098 11.3668 6.13963 11.4533 5.29794 11.6264C4.45624 11.7994 3.56342 12.122 2.61947 12.5939C2.39921 12.6883 2.21829 12.8496 2.0767 13.0777C1.9351 13.3058 1.86431 13.5379 1.86431 13.7739V14.4346ZM7.88201 6.17506C8.46411 6.17506 8.94395 5.98627 9.32153 5.60869C9.69912 5.2311 9.88791 4.75913 9.88791 4.19276C9.88791 3.59492 9.69912 3.11114 9.32153 2.74143C8.94395 2.37171 8.46411 2.18686 7.88201 2.18686C7.2999 2.18686 6.82006 2.37171 6.44248 2.74143C6.0649 3.11114 5.87611 3.58705 5.87611 4.16916C5.87611 4.75126 6.0649 5.2311 6.44248 5.60869C6.82006 5.98627 7.2999 6.17506 7.88201 6.17506Z'
                    fill='#B8BABC'
                  />
                </svg>
              </span>
              <input
                type='text'
                className='form-control border-start-0 px-0 myinput'
                placeholder='Username'
                aria-label='Username'
                aria-describedby='basic-addon1'
                style={{
                  color: 'black',
                  borderColor: '#e6e6e6',
                }}
              />
            </div>
            <div className='input-group mb-3'>
              <span
                className='input-group-text bg-white border-end-0 '
                id='basic-addon1'
                style={{ color: '#e6e6e6', borderColor: '#e6e6e6' }}
              >
                <svg
                  width='13'
                  height='17'
                  viewBox='0 0 13 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.18519 0.298935C7.19753 0.298935 8.05556 0.653873 8.75926 1.36375C9.46296 2.07363 9.81482 2.94091 9.81482 3.9656V5.50264H10.9074C11.3148 5.50264 11.6636 5.6477 11.9537 5.93782C12.2438 6.22795 12.3889 6.57671 12.3889 6.98412V14.836C12.3889 15.231 12.2438 15.5736 11.9537 15.8637C11.6636 16.1539 11.3148 16.2989 10.9074 16.2989H1.46296C1.05556 16.2989 0.709876 16.1539 0.425926 15.8637C0.141975 15.5736 0 15.231 0 14.836V6.98412C0 6.57671 0.141975 6.22795 0.425926 5.93782C0.709876 5.6477 1.05556 5.50264 1.46296 5.50264H2.55556V3.9656C2.55556 2.94091 2.90741 2.07363 3.61111 1.36375C4.31481 0.653873 5.17284 0.298935 6.18519 0.298935ZM6.18519 1.7619C5.58025 1.7619 5.0679 1.97486 4.64815 2.40079C4.2284 2.82671 4.01852 3.34832 4.01852 3.9656V5.50264H8.35185V3.9656C8.35185 3.34832 8.14198 2.82671 7.72222 2.40079C7.30247 1.97486 6.79012 1.7619 6.18519 1.7619ZM1.46296 14.836H10.9074V6.98412H1.46296V14.836ZM6.18519 9.48412C5.79012 9.48412 5.4537 9.63535 5.17593 9.93782C4.89815 10.2403 4.75926 10.5767 4.75926 10.9471C4.75926 11.3298 4.89815 11.657 5.17593 11.9286C5.4537 12.2002 5.79012 12.336 6.18519 12.336C6.58025 12.336 6.91667 12.2002 7.19444 11.9286C7.47222 11.657 7.61111 11.3298 7.61111 10.9471C7.61111 10.5767 7.47222 10.2403 7.19444 9.93782C6.91667 9.63535 6.58025 9.48412 6.18519 9.48412ZM1.46296 6.98412V14.836V6.98412Z'
                    fill='#B8BABC'
                  />
                </svg>
              </span>
              <input
                type='text'
                className='form-control border-start-0 px-0 myinput'
                placeholder='Password'
                aria-label='Password'
                aria-describedby='basic-addon1'
                style={{ color: 'black', borderColor: '#e6e6e6' }}
              />
            </div>
            <div>
              <button type='button' className='btn primarybg w-100 text-white'>
                {' '}
                Login
              </button>
              <p
                role={'button'}
                className='secondarycolor mt-2 '
                style={{ fontWeight: '400', fontSize: '14px' }}
              >
                Forgot your password?
              </p>
            </div>
          </div>
        </div>

        <div
          className='position-absolute d-flex flex-column align-items-center bottom-0  translate-middle-y'
          style={{ fontSize: '14px', color: '#233244' }}
        >
          <div className='d-flex gap-4 '>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div>© Punctualiti 2022. All rights reserved</div>
        </div>
      </div>
      <div className='w-100 lg:w-50 vh-100  px-5  login-right d-none d-sm-none d-md-none d-lg-flex flex-column justify-content-center'>
        <div className='position-relative w-100 d-flex align-items-center justify-content-center '>
          <img src={rectbg} alt='' className='w-100' />
          <img
            src={rectfront}
            alt=''
            className='position-absolute top-50 start-50  translate-middle'
            style={{ width: '90%' }}
          />
        </div>

        <div className='mt-5 text-white text-center'>
          <h2 className='fw-bold' style={{ fontSize: '32px' }}>
            360° Solution for Asset Management
          </h2>
          <p
            className='fw-normal'
            style={{ fontSize: '14px', color: '#F8F9FD' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
