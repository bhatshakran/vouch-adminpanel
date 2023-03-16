import React from 'react';

const Navbar = () => {
  return (
    <div
      style={{ height: '58px' }}
      className='nunito  py-1 px-4 d-flex justify-content-between'
    >
      <div>
        <h2 className='fw-bold my-0' style={{ fontSize: '24px' }}>
          View Clients
        </h2>
        <p className='my-0' style={{ fontSize: '12px' }}>
          Client Master / View Clients
        </p>
      </div>

      <div role='button'>
        <svg
          width='40'
          height='41'
          viewBox='0 0 40 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_7925_1288)'>
            <path
              d='M26.2063 24.6354L25.1479 23.5769V19.4744C25.1479 16.9554 23.8022 14.8467 21.4556 14.2887V13.7308C21.4556 13.0497 20.9058 12.5 20.2248 12.5C19.5438 12.5 18.994 13.0497 18.994 13.7308V14.2887C16.6392 14.8467 15.3017 16.9472 15.3017 19.4744V23.5769L14.2433 24.6354C13.7263 25.1523 14.0874 26.0385 14.8176 26.0385H25.6238C26.3622 26.0385 26.7233 25.1523 26.2063 24.6354ZM23.5069 24.3974H16.9428V19.4744C16.9428 17.4395 18.1817 15.7821 20.2248 15.7821C22.2679 15.7821 23.5069 17.4395 23.5069 19.4744V24.3974ZM20.2248 28.5C21.1274 28.5 21.8658 27.7615 21.8658 26.859H18.5838C18.5838 27.7615 19.314 28.5 20.2248 28.5Z'
              fill='#686687'
            />
          </g>
          <defs>
            <clipPath id='clip0_7925_1288'>
              <rect
                width='16'
                height='16'
                fill='white'
                transform='translate(12 12.5)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
