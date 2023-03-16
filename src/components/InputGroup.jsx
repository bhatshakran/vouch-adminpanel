import React from 'react';

const InputGroup = ({ placeholder, required = false }) => {
  return (
    <div
      className={`d-flex mb-3 border rounded-3 py-1 sm-w-100 w-100 `}
      style={{ borderColor: '#e6e6e6' }}
    >
      <input
        type='text'
        className='form-control border-0 px-2 myinput rounded-0 text-dark'
        placeholder={required ? `${placeholder}  *` : placeholder}
        style={{
          borderColor: '#e6e6e6',
        }}
      />
    </div>
  );
};

export default InputGroup;
