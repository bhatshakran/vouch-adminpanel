import React from 'react';
import SuccessCard from './SuccessCard';
import SuccessMsg from './SuccessMsg';
import infosys from '../images/infosys.png';
import iss from '../images/iss.png';
import sites from '../images/sites.png';

const Success = () => {
  window.scroll(0, 0);
  return (
    <section>
      <SuccessMsg />
      <section className='d-flex flex-wrap gap-2 mt-3 justify-content-center justify-content-lg-start'>
        <SuccessCard
          clientTitle='4 Clients'
          headingTitle='ISS Facility Services'
          img={iss}
        />
        <SuccessCard clientTitle='--' headingTitle='Infosys' img={infosys} />
        <SuccessCard clientTitle='--' headingTitle='Sites' img={sites} />
        <SuccessCard
          clientTitle='--'
          headingTitle='Tenant Groups'
          img={sites}
          disabled={true}
        />
        <SuccessCard
          clientTitle='--'
          headingTitle='Tenants'
          img={sites}
          disabled={true}
        />
      </section>
    </section>
  );
};

export default Success;
