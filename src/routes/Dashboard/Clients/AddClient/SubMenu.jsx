import React from 'react';

const SubMenu = () => {
  return (
    <section className='shadow-sm rounded-3 border p-4 px-3 modulesubmenu'>
      <div>
        <div className='d-flex flex-wrap justify-content-between align-items-start w-100 gap-3'>
          <div className='d-flex gap-3'>
            <div>
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='48' height='48' rx='8' fill='#E8EBF9' />
                <g clip-path='url(#clip0_1_8454)'>
                  <path
                    d='M24 12C17.376 12 12 17.376 12 24C12 30.624 17.376 36 24 36C30.624 36 36 30.624 36 24C36 17.376 30.624 12 24 12ZM32.952 20.544L29.616 21.924C29.004 20.292 27.72 18.996 26.076 18.396L27.456 15.06C29.976 16.02 31.98 18.024 32.952 20.544ZM24 27.6C22.008 27.6 20.4 25.992 20.4 24C20.4 22.008 22.008 20.4 24 20.4C25.992 20.4 27.6 22.008 27.6 24C27.6 25.992 25.992 27.6 24 27.6ZM20.556 15.048L21.96 18.384C20.304 18.984 18.996 20.292 18.384 21.948L15.048 20.556C16.02 18.024 18.024 16.02 20.556 15.048ZM15.048 27.444L18.384 26.064C18.996 27.72 20.292 29.016 21.948 29.616L20.544 32.952C18.024 31.98 16.02 29.976 15.048 27.444ZM27.456 32.952L26.076 29.616C27.72 29.004 29.016 27.708 29.616 26.052L32.952 27.456C31.98 29.976 29.976 31.98 27.456 32.952Z'
                    fill='#153AC7'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1_8454'>
                    <rect
                      width='24'
                      height='24'
                      fill='white'
                      transform='translate(12 12)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className='f-20 nunito fw-bold my-0'>Daily Tasks</h4>
              <p className='f-14 nunito my-1 secondarycolor'>
                Select the sub modules that the client can use.
              </p>
            </div>
          </div>

          <div>
            <button className='btn primarybg  text-white d-flex gap-2 align-items-center nunito'>
              <span>
                <svg
                  width='12'
                  height='10'
                  viewBox='0 0 12 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.70457 7.77842L1.21934 5.2932C0.940018 5.01388 0.488809 5.01388 0.20949 5.2932C-0.0698299 5.57251 -0.0698299 6.02372 0.20949 6.30304L3.20322 9.29678C3.48254 9.5761 3.93375 9.5761 4.21307 9.29678L11.7905 1.71934C12.0698 1.44002 12.0698 0.988809 11.7905 0.70949C11.5112 0.43017 11.06 0.43017 10.7807 0.70949L3.70457 7.77842Z'
                    fill='white'
                  />
                </svg>
              </span>
              <span>Visible to client</span>
            </button>
          </div>
        </div>
        <hr />

        <div className='bluishblack f-14'>
          <div className='d-flex gap-3  align-items-center nunito '>
            <input
              type='checkbox'
              id='module1'
              name='module1'
              value='Home / Dashboard'
            />
            <label htmlFor='module1' className='fw-bold '>
              {' '}
              Show all Sub Modules
            </label>
          </div>

          <div className='d-flex gap-3  align-items-center nunito mt-3'>
            <input
              type='checkbox'
              id='module1'
              name='module1'
              value='Home / Dashboard'
            />
            <label htmlFor='module1'> Summary</label>
          </div>
          <div className='d-flex gap-3  align-items-center nunito mt-3'>
            <input
              type='checkbox'
              id='module1'
              name='module1'
              value='Home / Dashboard'
            />
            <label htmlFor='module1'> View Tasks</label>
          </div>
          <div className='d-flex gap-3  align-items-center nunito mt-3'>
            <input
              type='checkbox'
              id='module1'
              name='module1'
              value='Home / Dashboard'
            />
            <label htmlFor='module1'> Create New Task</label>
          </div>
          <div className='d-flex gap-3  align-items-center nunito mt-3'>
            <input
              type='checkbox'
              id='module1'
              name='module1'
              value='Home / Dashboard'
            />
            <label htmlFor='module1'> Logbook</label>
          </div>
          <div className='d-flex gap-3  align-items-center nunito mt-3'>
            <input
              type='checkbox'
              id='module1'
              name='module1'
              value='Home / Dashboard'
            />
            <label htmlFor='module1'> Logsheet</label>
          </div>
          <div className='container'>
            <div className='d-flex gap-3  align-items-center nunito mt-3'>
              <input
                type='checkbox'
                id='module1'
                name='module1'
                value='Home / Dashboard'
              />
              <label htmlFor='module1'> Daily</label>
            </div>
            <div className='d-flex gap-3  align-items-center nunito mt-3'>
              <input
                type='checkbox'
                id='module1'
                name='module1'
                value='Home / Dashboard'
              />
              <label htmlFor='module1'> Activity wise</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubMenu;
