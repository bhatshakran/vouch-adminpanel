import React from 'react';

const InputGroup = ({ placeholder }) => {
  return (
    <div
      className='d-flex mb-3 border rounded-3 py-1 sm-w-100 '
      style={{ borderColor: '#e6e6e6', width: '48%' }}
    >
      <input
        type='text'
        className='form-control border-0 px-2 myinput rounded-0'
        placeholder={placeholder}
        aria-label='Username'
        aria-describedby='basic-addon1'
        style={{
          color: 'black',
          borderColor: '#e6e6e6',
        }}
      />
    </div>
  );
};

export default InputGroup;
