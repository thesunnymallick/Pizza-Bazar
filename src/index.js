import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RestaurentInfo from './pages/RestaurentInfo';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/restaurent/:id',
        element: <RestaurentInfo />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
