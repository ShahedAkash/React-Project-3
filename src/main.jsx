import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home';
import Root from './Pages/Root/Root';
import Login from './Pages/Login_signUp/Login/Login';
import SignUp from './Pages/Login_signUp/signUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import DetailService from './Pages/Home/DetailService/DetailService';
import PrivateRoute from './route/PrivateRoute';
import PackagesDetail from './Pages/Home/packages/packagesDetail/PackagesDetail';
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import AboutUs from './Pages/aboutUs/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("/services.json")
      },
      {
        path:"packagesDetail/:id",
        element: <PrivateRoute><PackagesDetail></PackagesDetail></PrivateRoute>,
        loader: ()=>fetch("/packages.json")
      },
      {
        path:"/detailService/:id",
        element: <PrivateRoute><DetailService></DetailService></PrivateRoute>,
        loader: ()=>fetch("/services.json")
      },
      {
        path: "/logIn",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path:'/aboutus',
        element:<AboutUs></AboutUs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
