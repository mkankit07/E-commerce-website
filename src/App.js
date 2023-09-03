import React from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

// import  Counter  from './features/counter/Counter';
// import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cartpage from './pages/Cartpage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element:( <LoginPage></LoginPage>),
  },
  {
    path: '/signup',
    element: (<SignupPage></SignupPage>),
  },
  {
    path: '/',
    element:( <Home></Home>),
  },
  {
    path:"/cart",
    element:<Cartpage/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  },{
    path:"/product-detial",
    element:<ProductDetailsPage/>
  }
  
]);
function App() {
  return (
    <div >
      {/* `     <Home/> */}
      {/* /<LoginPage /> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
