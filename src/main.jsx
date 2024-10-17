import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Reserve from './Components/Reserve/Reserve';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import SignIn from './Components/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/reserve',
        element:<Reserve></Reserve>
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<SignIn></SignIn>
      }
    ]
  },
]);

// Use `createRoot` for React 18
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
