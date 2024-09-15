import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style/index.css';
import Header from './common/Header.jsx';
import NotFound from './pages/NotFound.jsx';
import Product from './pages/Product/Product.jsx';
import Banner from './Banner.jsx';

// Define the products array directly in index.js
const products = [
    {
        id: 1,
        name: 'I Phone 16 Pro Max',
        price: 1934,
        image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/iphone-16-pro-max-29160331-16x9.jpg?VersionId=ig4dzubFlGWb_CR.BjVuLAYfF_FmH5po&size=690:388',
        link: '/product/1'
    },
    {
        id: 2,
        name: 'Apple MacBook',
        price: 1869,
        image: 'https://5.imimg.com/data5/TL/QP/MY-44855983/apple-macbook-air-500x500.jpg',
        link: '/product/2'
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Banner products={products} />} />
        <Route path='/home' element={<Banner products={products} />} />
        <Route path='/product' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);
