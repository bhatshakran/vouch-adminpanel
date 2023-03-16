import React from 'react';

const ThemeSetup = () => {
  return (
    <section className='bg-white px-2  py-4 rounded-bottom-3 shadow-s,'>
      <div className='mt-3'>
        <div className='mx-3'>
          <h2 className='nunito my-0 fw-bold sm-f-18 f-20'>Theme Setup</h2>
          <p className='secondarycolor nunito f-14 my-1'>
            Add information about the client to give them a personalized
            experience.
          </p>
        </div>

        <div className='mx-3 mt-4'>
          <div
            className='position-relative border rounded-3 px-2 d-flex align-items-center'
            style={{ borderColor: '#e6e6e6' }}
          >
            <input
              type='text'
              className='form-control border-0 px-4 w-100 text-dark colorpickerinput'
              style={{ color: 'black' }}
              placeholder='#153AC7'
            />
            <span className='circle'></span>
            <span className='position-absolute nunito colorpickerheading'>
              Primary Color
            </span>

            <span>
              <svg
                className='mb-1'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_7925_1446)'>
                  <path
                    d='M7.33301 4.66667H8.66634V6H7.33301V4.66667ZM7.33301 7.33334H8.66634V11.3333H7.33301V7.33334ZM7.99967 1.33334C4.31967 1.33334 1.33301 4.32 1.33301 8C1.33301 11.68 4.31967 14.6667 7.99967 14.6667C11.6797 14.6667 14.6663 11.68 14.6663 8C14.6663 4.32 11.6797 1.33334 7.99967 1.33334ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.94 2.66634 8C2.66634 5.06 5.05967 2.66667 7.99967 2.66667C10.9397 2.66667 13.333 5.06 13.333 8C13.333 10.94 10.9397 13.3333 7.99967 13.3333Z'
                    fill='#B8BABC'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_7925_1446'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <span className='nunito secondarycolor f-14 '>Add a hex color</span>
        </div>

        <div className='mx-3 mt-4'>
          <div>
            <h4 className='nunito fw-bold my-0 f-16'>Login Theme</h4>
            <p className='nunito secondarycolor my-1 f-14'>
              Select the look and feel of the login page
            </p>
          </div>
        </div>

        <div className='mx-3 mt-3'>
          <div className='d-flex align-items-center gap-1 nunito f-14'>
            <input
              type='radio'
              id='usecolor'
              name='usecolor'
              value='Use Color'
            />
            <label htmlFor='usecolor'>Use Color</label>
          </div>

          <div>
            <div
              className='position-relative border rounded-3 px-2 d-flex align-items-center mx-3 mt-3'
              style={{ borderColor: '#e6e6e6', maxWidth: '250px' }}
            >
              <input
                type='text'
                className='form-control border-0 px-4 w-100 text-dark colorpickerinput'
                style={{ color: 'black' }}
                placeholder='#153AC7'
              />
              <span className='greycircle'></span>

              <span>
                <svg
                  className='mb-1'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_7925_1446)'>
                    <path
                      d='M7.33301 4.66667H8.66634V6H7.33301V4.66667ZM7.33301 7.33334H8.66634V11.3333H7.33301V7.33334ZM7.99967 1.33334C4.31967 1.33334 1.33301 4.32 1.33301 8C1.33301 11.68 4.31967 14.6667 7.99967 14.6667C11.6797 14.6667 14.6663 11.68 14.6663 8C14.6663 4.32 11.6797 1.33334 7.99967 1.33334ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.94 2.66634 8C2.66634 5.06 5.05967 2.66667 7.99967 2.66667C10.9397 2.66667 13.333 5.06 13.333 8C13.333 10.94 10.9397 13.3333 7.99967 13.3333Z'
                      fill='#B8BABC'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_7925_1446'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className='mx-3 mt-4'>
          <div>
            <h4 className='nunito f-14 fw-bold'>
              Where Should be the login modal?
            </h4>
            {/* login modal position */}
            <div className='d-flex flex-wrap gap-3 mt-3'>
              <div className='d-flex flex-column align-items-center gap-1'>
                <div className='login-modal left-modal posleftmodal'></div>
                <div className='d-flex align-items-center gap-1 nunito f-14'>
                  <input type='radio' id='left' name='position' value='Left' />
                  <label htmlFor='left'>Left</label>
                </div>
              </div>
              <div className='d-flex flex-column align-items-center gap-1'>
                <div className='login-modal right-modal posrightmodal'></div>
                <div className='d-flex align-items-center gap-1 nunito f-14'>
                  <input
                    type='radio'
                    id='right'
                    name='position'
                    value='Right'
                  />
                  <label htmlFor='right'>Right</label>
                </div>
              </div>
              <div className='d-flex  flex-column align-items-center gap-1'>
                <div className='login-modal center-modal poscentermodal translate-x-middle'></div>
                <div className='d-flex align-items-center gap-1 nunito f-14'>
                  <input
                    type='radio'
                    id='center'
                    name='position'
                    value='Center'
                  />
                  <label htmlFor='center'>Center</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-4 mx-3 d-flex flex-wrap gap-4 nunito'>
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

export default ThemeSetup;
