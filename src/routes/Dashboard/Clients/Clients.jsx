import { Space, Switch, Table } from 'antd';
import { Dropdown } from 'antd';
import React, { useState } from 'react';
import HeaderOfTable from './TableHeader/HeaderOfTable';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import infosys from '../../../assets/infosys.png';
import wipro from '../../../assets/wipro.png';
import accenture from '../../../assets/accenture.png';
import hcl from '../../../assets/hcl.png';
import lt from '../../../assets/lt.png';
import redingiton from '../../../assets/redingiton.png';
import lodha from '../../../assets/lodha.png';
import cape from '../../../assets/cape.png';
import tat from '../../../assets/tat.png';
import mphasis from '../../../assets/mphasis.png';

const avatarArr = [
  infosys,
  wipro,
  accenture,
  cape,
  lodha,
  tat,
  hcl,
  redingiton,
  mphasis,
  lt,
];

const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <span className='nunito bluishblack f-14 d-flex gap-1'>
        <img src={avatarArr[record.key]} alt='' width={'20px'} height='20px' />
        {text}
      </span>
    ),
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <span className='nunito bluishblack f-14'>{text}</span>,
  },
  {
    title: 'Phone No',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <span className='nunito bluishblack f-14'>{text}</span>,
  },
  {
    title: 'Contact Person',
    key: 'contact',
    dataIndex: 'contact',
    render: (text) => <span className='nunito bluishblack f-14'>{text}</span>,
  },
  {
    title: 'Facilitator',
    key: 'facilitator',
    dataIndex: 'facilitator',
    render: (text) => <span className='nunito bluishblack f-14'>{text}</span>,
  },
  {
    title: 'Sites',
    key: 'sites',
    dataIndex: 'sites',
    render: (text) => <span className='nunito bluishblack f-14'>{text}</span>,
  },

  {
    title: 'Tenants',
    key: 'tenants',
    dataIndex: 'tenants',
    render: (text) => <span className='nunito bluishblack f-14'>{text}</span>,
  },
  {
    title: 'Tenant Groups',
    key: 'tgroups',
    dataIndex: 'tgroups',
    render: (text) => <span className='nunito bluishblack f-14'>{text}</span>,
  },

  {
    title: 'Actions',
    key: 'action',
    dataIndex: 'actions',
    render: () => (
      <div className='d-flex align-items-center justify-content-center fs-5'>
        <Dropdown
          menu={{
            items,
          }}
        >
          <span role='button'>
            <BiDotsVerticalRounded />
          </span>
        </Dropdown>
      </div>
    ),
  },
];
const data = [
  {
    key: '0',
    name: 'Infosys',
    email: 'management@infosys.com',
    phone: '+91 95963214587',
    contact: 'Vijayent Roy',
    sites: '12',
    facilitator: '--',
    tenants: '--',
    tgroups: '--',
  },

  {
    key: '1',
    name: 'Wipro',
    email: 'management@wipro.com',
    phone: '+91 95963214587',
    contact: 'Kalpit Soni',
    sites: '8',
    facilitator: '--',
    tenants: '--',
    tgroups: '--',
  },

  {
    key: '2',
    name: 'Accenture',
    email: 'management@accenture.com',
    phone: '+91 95963214587',
    contact: 'Drishti Sane',
    sites: '4',
    facilitator: '--',
    tenants: '--',
    tgroups: '--',
  },
  {
    key: '3',
    name: 'Capgemini',
    email: 'management@capgemini.com',
    phone: '+91 95963214587',
    contact: 'Aisha Keer',
    sites: '6',
    facilitator: '--',
    tenants: '--',
    tgroups: '--',
  },

  {
    key: '4',
    name: 'Lodhi',
    email: 'management@lodhi.com',
    phone: '+91 95963214587',
    contact: 'Kanika Khare',
    sites: '24',
    facilitator: '--',
    tenants: '16',
    tgroups: '--',
  },
  {
    key: '5',
    name: 'Tata Consultancy Services',
    email: 'management@tcs.com',
    phone: '+91 95963214587',
    contact: 'Prabhat Rao',
    sites: '10',
    facilitator: '--',
    tenants: '--',
    tgroups: '--',
  },
  {
    key: '6',
    name: 'HCL',
    email: 'management@hcl.com',
    phone: '+91 95963214587',
    contact: 'Venkant Pant',
    sites: '5',
    facilitator: '--',
    tenants: '2',
    tgroups: '1',
  },
  {
    key: '7',
    name: 'Redingtion',
    email: 'management@redingtion.com',
    phone: '+91 95963214587',
    contact: 'Samir Yadav',
    sites: '1',
    facilitator: '--',
    tenants: '1',
    tgroups: '--',
  },
  {
    key: '8',
    name: 'Mphasis',
    email: 'management@mphasis.com',
    phone: '+91 95963214587',
    contact: 'Sweta Chawla',
    sites: '1',
    facilitator: '--',
    tenants: '--',
    tgroups: '--',
  },

  {
    key: '9',
    name: 'Larsen & Toubro',
    email: 'management@larsentourbo.com',
    phone: '+91 95963214587',
    contact: 'Abhishek Kumar',
    sites: '16',
    facilitator: '--',
    tenants: '--',
    tgroups: '--',
  },
];

const Clients = () => {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <section>
      <div className='mx-3  nunito'>
        <HeaderOfTable />
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1300,
          }}
          /*  summary={() => (
            <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
              {/* <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2}>
                  <Switch
                    checkedChildren='Fixed Top'
                    unCheckedChildren='Fixed Top'
                    checked={fixedTop}
                    onChange={() => {
                      setFixedTop(!fixedTop);
                    }}
                  />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} colSpan={8}>
                  Scroll Context
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
              </Table.Summary.Row> */
          // </Table.Summary>
          // )}
          // sticky */
        />
      </div>
    </section>
  );
};

export default Clients;
