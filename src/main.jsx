import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Login, { action as loginAction } from './routes/Login';
import './App.css';
import Clients from './routes/Dashboard/Clients/Clients';
import AddClient from './routes/Dashboard/Clients/AddClient/AddClient';
import CreateProfile from './routes/Dashboard/Clients/AddClient/CreateProfile/CreateProfile';
import PaymentSetup from './routes/Dashboard/Clients/AddClient/PaymentSetup/PaymentSetup';
import ThemeSetup from './routes/Dashboard/Clients/AddClient/ThemeSetup/ThemeSetup';
import ModulesSetup from './routes/Dashboard/Clients/AddClient/ModuleSetup/ModulesSetup';
import Success from './routes/Dashboard/Clients/AddClient/Success/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: 'clients',
        element: <Clients />,
      },

      {
        path: 'add',
        element: <AddClient />,
        children: [
          {
            path: 'createprofile',
            element: <CreateProfile />,
          },
          {
            path: 'paymentsetup',
            element: <PaymentSetup />,
          },
          {
            path: 'themesetup',
            element: <ThemeSetup />,
          },
          {
            path: 'modulesetup',
            element: <ModulesSetup />,
          },
          {
            path: 'success',
            element: <Success />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    action: loginAction,
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
