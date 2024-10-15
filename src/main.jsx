import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
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
