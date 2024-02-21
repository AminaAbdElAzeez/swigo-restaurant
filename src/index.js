import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Routes/Root/Root';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Faq from './Routes/Faq/Faq';
import Team from './Routes/Team/Team';
import Testimonial from './Routes/Testimonial/Testimonial';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ComingSoon from './Routes/ComingSoon/ComingSoon';
import Blog from './Routes/Blog/Blog';
import Contact from './Routes/Contact/Contact';
import Login from './Routes/Form/Login';
import Register from './Routes/Form/Register';
import Menu from './Routes/Menu/Menu';
import CartProvider from './Context/CartProvider';
import Cart from './Routes/Cart/Cart';

 // routing
 const routes = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    errorElement : <ErrorPage/>,
    children : [
      { index: true, element : <Home/>},
      { path : "home" , element : <Home/>},
      { path : "about", element : <About/> },
      { path : "faq", element : <Faq/> },
      { path : "team", element : <Team/> },
      { path : "testimonial", element : <Testimonial/> },
      { path : "coming-soon", element : <ComingSoon/>},
      { path : "menu", element : <Menu/>},
      { path : "blog", element : <Blog/>},
      { path : "register" , element : <Register/> },
      { path : "login" , element : <Login/> },
      { path : "contact", element : <Contact/>},
      { path : "error-page", element : <ErrorPage/>},
      { path : "cart" , element : <Cart/> },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={routes}/>
  </CartProvider>
);