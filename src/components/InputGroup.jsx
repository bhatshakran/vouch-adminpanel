import React from 'react';

const InputGroup = ({ placeholder, w = 'half' }) => {
  return (
    <div
      className={`d-flex mb-3 border rounded-3 py-1 sm-w-100 ${
        w === 'full' ? 'w-100' : 'w-48'
      } `}
      style={{ borderColor: '#e6e6e6', width: '48%' }}
    >
      <input
        type='text'
        className='form-control border-0 px-2 myinput rounded-0 text-dark'
        placeholder={placeholder}
        style={{
          borderColor: '#e6e6e6',
        }}
      />
    </div>
  );
};

export default InputGroup;
