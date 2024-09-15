import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header.jsx';
import Banner from './Banner.jsx';
import Product from './pages/Product/Product.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Banner />} />
                <Route path='/home' element={<Banner />} />
                <Route path='/product' element={<Product />} />
                {/* Not Found */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
