import React from 'react';
import { Link } from 'react-router-dom';

const SuccessCard = ({ img, disabled = false }) => {
  return (
    <article
      className={` rounded-3 shadow-sm d-flex align-items-center justify-content-center flex-column px-3 gap-2 ${
        disabled ? 'disabledbg' : 'bg-white'
      } `}
      style={{ height: '326px', width: '293px' }}
    >
      <div
        className={`d-flex align-items-center justify-content-center rounded-circle  ${
          disabled ? 'disabledbtn' : 'rdimgbg'
        }`}
        style={{ width: '96px', height: '96px' }}
      >
        <img src={img} alt='' />
      </div>
      <h6 className='f-18 nunito bluishblack my-0'>ISS Facility Services</h6>
      <p className='f-14 nunito secondarycolor'>4 Clients</p>

      <button
        className={`btn  w-100 nunito   py-2 ${
          disabled ? 'disabledbtn' : 'lightbtnbg fw-bold'
        }`}
      >
        <span className={`${disabled ? 'secondarycolor' : 'primarycolor'}`}>
          Add FCM
        </span>
      </button>

      <Link
        to=''
        className={`secondarycolor ${disabled && 'disabledbg'}`}
        style={{ textDecoration: 'none' }}
      >
        View All
      </Link>
    </article>
  );
};

export default SuccessCard;
