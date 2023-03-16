import Clients from './Dashboard/Clients/Clients';
import Login, { action as loginAction } from './Login';
import Dashboard from './Dashboard/index';
import AddClient from './Dashboard/Clients/AddClient/AddClient';
import CreateProfile from './Dashboard/Clients/AddClient/CreateProfile/CreateProfile';
import PaymentSetup from './Dashboard/Clients/AddClient/PaymentSetup/PaymentSetup';
import ThemeSetup from './Dashboard/Clients/AddClient/ThemeSetup/ThemeSetup';
import ModulesSetup from './Dashboard/Clients/AddClient/ModuleSetup/ModulesSetup';
import Success from './Dashboard/Clients/AddClient/Success/Success';
import RouteGuard from '../components/RouteGuard';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouteGuard>
        <Dashboard />
      </RouteGuard>
    ),
    children: [
      {
        path: '/clients',
        element: <Clients />,
      },

      {
        path: '/add',
        element: <AddClient />,
        children: [
          {
            path: '/add/createprofile',
            element: <CreateProfile />,
          },
          {
            path: '/add/paymentsetup',
            element: <PaymentSetup />,
          },
          {
            path: '/add/themesetup',
            element: <ThemeSetup />,
          },
          {
            path: '/add/modulesetup',
            element: <ModulesSetup />,
          },
          {
            path: '/add/success',
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
export default router;
