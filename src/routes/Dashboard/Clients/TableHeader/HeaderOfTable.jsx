import React from 'react';

const HeaderOfTable = () => {
  return (
    <section className='bg-white rounded-top-3 shadow-sm '>
      <div className='d-flex justify-content-between px-3 align-items-center py-3'>
        <div className=' w-25 input-group  border rounded-pill px-3 '>
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
            placeholder='Search '
            aria-label='Search '
            aria-describedby='basic-addon1'
            style={{
              color: '#8E96A0',
              borderColor: '#e6e6e6',
            }}
          />
        </div>
        <section className='d-flex gap-5'>
          <div
            className='border rounded-3 p-2 d-flex gap-3'
            style={{ borderColor: '#e6e6e6', color: '#8E96A0' }}
          >
            Columns
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </span>
          </div>

          <div>
            <button
              className='btn primarycolor p-2 px-3 d-flex gap-3 align-items-center'
              style={{ backgroundColor: '#E8EBF9' }}
            >
              <span className=''>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_7902_1017)'>
                    <path
                      d='M5.90665 8.46959C5.81612 8.46959 5.73126 8.45262 5.65205 8.41867C5.57284 8.38472 5.49929 8.33381 5.4314 8.26591L2.76662 5.60113C2.63083 5.46535 2.56577 5.3041 2.57143 5.1174C2.57709 4.93069 2.64781 4.77511 2.78359 4.65064C2.91938 4.51485 3.07779 4.44696 3.25884 4.44696C3.43989 4.44696 3.5983 4.51485 3.73409 4.65064L5.22772 6.16124V0.678925C5.22772 0.486563 5.29279 0.325318 5.42291 0.195191C5.55304 0.0650636 5.71429 0 5.90665 0C6.09901 0 6.26025 0.0650636 6.39038 0.195191C6.52051 0.325318 6.58557 0.486563 6.58557 0.678925V6.16124L8.09618 4.65064C8.23197 4.51485 8.39038 4.44696 8.57143 4.44696C8.75248 4.44696 8.91089 4.51485 9.04668 4.65064C9.18246 4.77511 9.25035 4.93069 9.25035 5.1174C9.25035 5.3041 9.18246 5.46535 9.04668 5.60113L6.3819 8.26591C6.314 8.33381 6.23762 8.38472 6.15276 8.41867C6.06789 8.45262 5.98586 8.46959 5.90665 8.46959ZM1.35785 12C0.984441 12 0.664781 11.867 0.398869 11.6011C0.132956 11.3352 0 11.0156 0 10.6421V8.46959C0 8.27723 0.0650638 8.11598 0.195191 7.98586C0.325318 7.85573 0.486563 7.79067 0.678925 7.79067C0.871287 7.79067 1.03253 7.85573 1.16266 7.98586C1.29279 8.11598 1.35785 8.27157 1.35785 8.45262V10.6421H10.4554V8.45262C10.4554 8.27157 10.5205 8.11598 10.6506 7.98586C10.7808 7.85573 10.942 7.79067 11.1344 7.79067C11.3154 7.79067 11.471 7.85573 11.6011 7.98586C11.7313 8.11598 11.7963 8.27157 11.7963 8.45262V10.6421C11.7963 11.0156 11.6634 11.3352 11.3975 11.6011C11.1315 11.867 10.8175 12 10.4554 12H1.35785Z'
                      fill='#153AC7'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_7902_1017'>
                      <rect width='12' height='12' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Export</span>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeaderOfTable;
