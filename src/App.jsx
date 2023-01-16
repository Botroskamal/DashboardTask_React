import { Route, Routes } from 'react-router-dom';
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './pages/Dashboard/Dashboard';
import Booking from './pages/Booking/Booking';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Logout from './pages/Logout/Logout';
import Test from './pages/Test/Test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/booking",
    element: <Booking />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/test",
    element: <Test />
  }
]);

function App() {

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
