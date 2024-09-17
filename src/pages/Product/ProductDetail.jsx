import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`) // Fetch product details by ID
      .then((res) => setProduct(res.data))
      .catch(() => toast.error('Failed to fetch product details.'));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row">
        <div className="col-sm-4 offset-2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid shadow-lg"
          />
        </div>
        <div className="col-sm-5">
          <h2>{product.title}</h2>
          <p>{product.description}</p> 
          <p><strong><i class="bi bi-bookmark-heart-fill text-success"></i> Category: </strong> {product.category}</p>
          <p><strong><i class="bi bi-currency-dollar text-success"></i> Price:</strong>  {product.price} $</p>
          <p><strong><i class="bi bi-info-circle-fill text-success"></i> warrantyInformation:</strong>  {product.warrantyInformation}</p>
          <p><strong><i class="bi bi-star-fill text-warning"></i> Rating: </strong> {product.rating}</p>
          <Link to={'/product'}>
          <button style={{backgroundColor:"#003B70"}} className='btn me-2 text-white'>Back </button> 
          </Link>
        </div>
        
      </div>
     
    </div>
  );
}

export default ProductDetail;
