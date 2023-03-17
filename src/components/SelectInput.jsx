import React from 'react';

const SelectInput = ({
  placeholder = 'Select Bussiness Category',
  required = false,
}) => {
  return (
    <div
      className={`border rounded-3 px-2 mb-3 sm-w-100 ${required && 'addred'} `}
      style={{
        borderColor: '#e6e6e6',
        height: '46px',
      }}
    >
      <select
        className={`border-0 py-2 w-100 h-100 myinput myselect bg-white  h-100`}
        required={required}
      >
        <option className='placeholder nunito'>
          {required ? `${placeholder}  *` : placeholder}
        </option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </div>
  );
};

export default SelectInput;
