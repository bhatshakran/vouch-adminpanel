import React from 'react';

const SelectInput = () => {
  return (
    <div
      className='border rounded-3 px-2 mb-3 sm-w-100 '
      style={{
        borderColor: '#e6e6e6',
        width: '48%',
        height: '46px',
      }}
    >
      <select className='border-0 py-2 w-100 h-100 myinput secondarycolor'>
        <option defaultValue={'Select Bussiness Category'}>
          Select Bussiness Category
        </option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </div>
  );
};

export default SelectInput;
