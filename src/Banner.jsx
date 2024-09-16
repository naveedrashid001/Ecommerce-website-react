import React, { useState, useEffect } from 'react';
import './Banner.css'; 
import { Link } from "react-router-dom";

const Banner = ({ products }) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 24,
        minutes: 0,
        seconds: 0
    });

    // Countdown logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer); // Clean up timer on component unmount
    }, []);

    // Get 2 random products
    const getRandomProducts = (products) => {
        if (products.length <= 2) return products;
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2);
    };

    const randomProducts = getRandomProducts(products);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 text-center offer-section">
                    <h3 className="special-offer mt-5">SPECIAL OFFER</h3>
                    <h1 className="sale">SALE</h1>
                    <h4 className="discount">UP TO 70% OFF</h4>
                    <p>UNLIMITED PACKAGE ON SALE</p>
                    <button className="btn btn-dark btn-lg"><Link className='li' to={'/product'}>BUY NOW</Link></button>
                </div>
                <div className="col-md-6 text-center package-section">
                    <h2 className="package-title">New Unlimited Package</h2>
                    <div className="countdown d-flex justify-content-around my-3">
                        <div className="countdown-item">{timeLeft.hours}</div>
                        <div className="countdown-item">{timeLeft.minutes}</div>
                        <div className="countdown-item">{timeLeft.seconds}</div>
                    </div>

                    {/* Product-related data */}
                    <div className="product-section">
                        <h3 className="my-3">Products Included</h3>
                        <div className="row">
                            {randomProducts && randomProducts.length > 0 ? (
                                randomProducts.map((product) => (
                                    <div className="col-md-6 mb-3" key={product.id}>
                                        <div className="card">
                                            <img src={product.image} className="card-img-top" alt={product.name} />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text">${product.price}</p>
                                                <Link to={`/product/${product.id}`} className="btn btn-outline-success">View Product</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No products available</p>
                            )}
                        </div>
                    </div>

                    <button className="btn btn-warning btn-lg mt-4"><Link className='li' to={'/product'}>View All Packages</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
