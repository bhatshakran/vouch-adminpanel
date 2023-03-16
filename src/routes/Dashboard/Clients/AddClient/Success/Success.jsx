import React from 'react';
import SuccessCard from './SuccessCard';
import SuccessMsg from './SuccessMsg';
import infosys from '../images/infosys.png';
import iss from '../images/iss.png';
import sites from '../images/sites.png';

const Success = () => {
  return (
    <section>
      <SuccessMsg />
      <section className='d-flex flex-wrap gap-2 mt-3 justify-content-center justify-content-lg-start'>
        <SuccessCard img={iss} />
        <SuccessCard img={infosys} />
        <SuccessCard img={sites} />
        <SuccessCard img={sites} disabled={true} />
        <SuccessCard img={sites} disabled={true} />
      </section>
    </section>
  );
};

export default Success;
