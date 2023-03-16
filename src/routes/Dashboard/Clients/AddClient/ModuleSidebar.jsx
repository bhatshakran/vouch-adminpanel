import React, { useEffect, useRef, useState } from 'react';

const ModuleSidebar = ({ renderSubmenu }) => {
  const submenuhanlderRef = useRef(null);
  const [submenuactive, setSubmenuActive] = useState(true);

  useEffect(() => {
    if (submenuhanlderRef.current.checked) {
      setSubmenuActive(true);
      renderSubmenu();
    } else setSubmenuActive(false);
  }, []);

  const showSubMenu = () => {
    setSubmenuActive(!submenuactive);
    renderSubmenu();
  };

  return (
    <div className='mx-3 mt-2 modulesidebar'>
      <div
        className='d-flex flex-column gap-4 flex-wrap'
        style={{ fontSize: '14px' }}
      >
        <div className='d-flex gap-3  align-items-center nunito'>
          <input
            type='checkbox'
            id='module1'
            name='module1'
            value='Home / Dashboard'
          />
          <label htmlFor='module1'> Home / Dashboard</label>
        </div>
        <div className='d-flex gap-3  align-items-center nunito'>
          <input type='checkbox' id='module2' name='module2' value='Helpdesk' />
          <label htmlFor='module2'> Helpdesk</label>
        </div>
        <div className='d-flex gap-3  align-items-center nunito'>
          <input type='checkbox' id='module8' name='module8' value='Assets' />
          <label htmlFor='module8'> Assets</label>
        </div>
        <div
          className={`d-flex gap-3  align-items-center  nunito modulehandler ${
            submenuactive && 'primarybg p-2 text-white rounded-3 px-3 '
          }`}
        >
          <input
            ref={submenuhanlderRef}
            onClick={showSubMenu}
            type='checkbox'
            id='module3'
            name='module3'
            value='DailyTasks'
            checked={submenuactive}
            className={`${submenuactive && 'whiteaccent'}`}
          />
          <div className='d-flex justify-content-between w-100'>
            <div>
              <label htmlFor='module3'> DailyTasks</label>
            </div>
            <div>
              <svg
                width='8'
                height='10'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.735818 11.765C1.04917 12.0783 1.55436 12.0783 1.86771 11.765L7.18186 6.45084C7.43126 6.20144 7.43126 5.79856 7.18186 5.54916L1.86771 0.235012C1.55436 -0.0783373 1.04917 -0.0783373 0.735818 0.235012C0.422468 0.548361 0.422468 1.05356 0.735818 1.36691L5.36571 6.0032L0.729423 10.6395C0.422468 10.9464 0.422468 11.458 0.735818 11.765Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='d-flex gap-3  align-items-center nunito'>
          <input type='checkbox' id='module4' name='module4' value='PPM' />
          <label htmlFor='module4'> PPM</label>
        </div>
        <div className='d-flex gap-3  align-items-center nunito'>
          <input
            type='checkbox'
            id='module5'
            name='module5'
            value='Employees'
          />
          <label htmlFor='module5'> Employees</label>
        </div>
        <div className='d-flex gap-3  align-items-center nunito'>
          <input type='checkbox' id='module6' name='module6' value='Profile' />
          <label htmlFor='module6'> Profile</label>
        </div>
        <div className='d-flex gap-3  align-items-center nunito'>
          <input
            type='checkbox'
            id='module7'
            name='module7'
            value='Transactions'
          />
          <label htmlFor='module7'> Transactions</label>
        </div>
      </div>
    </div>
  );
};

export default ModuleSidebar;
