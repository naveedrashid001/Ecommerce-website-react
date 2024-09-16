import React, { useEffect, useState } from 'react';
import Catogary from './Catogary';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function Product() {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalProduct, setFinalProduct] = useState([]);
  const [catName, setCatName] = useState('');
  const [noProductFound, setNoProductFound] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(9); // Limit initial products to 20
  const { id } = useParams(); // Get the product ID from URL

  const getCatogary = () => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      })
      .catch(() => {
        toast.error('Failed to fetch categories.');
      });
  };

  const getProducts = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalProduct(finalRes.products);
        toast.success('Products loaded successfully.');
      })
      .catch(() => {
        toast.error('Failed to fetch products.');
      });
  };

  useEffect(() => {
    getCatogary();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== '') {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.products.length === 0) {
            setNoProductFound(true);
          } else {
            setFinalProduct(finalRes.products);
            toast.success(`Products loaded for: ${catName}`);
            setNoProductFound(false); // Ensure no error is shown if products are found
          }
        })
        .catch(() => {
          toast.error('Failed to fetch products for this category.');
        });
    }
  }, [catName]);

  useEffect(() => {
    if (noProductFound) {
      toast.error(`No Product Found for: ${catName}`);
      setNoProductFound(false); // Reset state after showing the notification
    }
  }, [noProductFound, catName]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => res.data)
        .then((product) => {
          setFinalProduct([product]); // Show the single product
        })
        .catch(() => {
          toast.error('Failed to fetch product details.');
        });
    }
  }, [id]);

  // Show only visibleProducts number of products
  const pItems = finalProduct.slice(0, visibleProducts).map((product, index) => {
    return <ProductItem key={index} product={product} />;
  });

  // Function to load more products
  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 10);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row mt-5">
        <div className="col-sm-3">
          <h4 className="p-3 text-center text-dark">Category</h4>
          <Catogary finalCategory={finalCategory} setCatName={setCatName} />
        </div>

        <div className="col-sm-9">
          <div className="row">
            <h4 className="p-3 text-center text-dark">Products</h4>
            {finalProduct.length >= 1 ? (
              <>
                {pItems}
                {visibleProducts < finalProduct.length && (
                  <div className="text-center my-3">
                    <button
                      className="btn btn-warning btn-lg"
                      onClick={loadMoreProducts}
                    >
                      Show More Products
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div style={{ textAlign: 'center' }}>
                No Product Found
                <br />
                <img
                  src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
                  alt='loading img'
                  style={{ margin: '20px auto', display: 'block', width: '400px' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

function ProductItem({ product }) {
  return (
    <div className="col-sm-4 p-2 shadow-lg text-center mb-2 mx-auto mb-5">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="img-fluid px-3"
      />
      <h5 className="mt-3">{product.title}</h5>
      <b className="pb-2">{product.price}$</b>
    </div>
  );
}
