// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers/cartSlice';
import ShimmerProductDetail from './ShimmerProductDetail ';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <ShimmerProductDetail />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 max-w-md mx-auto flex items-center">
          <img className="w-full h-auto object-contain max-h-96" src={product.image} alt={product.title} />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold text-red-500">₹{product.price}</span>
            <span className="text-sm line-through ml-4 text-gray-500">₹100</span> 
            <span className="text-sm ml-4 text-green-500">68% off</span> 
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-gray-700 font-bold">Brand: </span>The Modern Soul
          </div>
          <button 
            onClick={() => dispatch(addItem(product))} 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Offers</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-700 mb-2">Cashback: 3 months Prime membership + Rs...</p>
              <p className="text-gray-700 mb-2">Partner Offers: Get GST invoice and save up to 28% on...</p>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-700 font-bold">Size: </span>
              <select className="ml-2 p-2 border rounded">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-bold">Color: </span>
              <div className="ml-2 flex">
                <span className="w-6 h-6 bg-black rounded-full mr-2"></span>
                <span className="w-6 h-6 bg-red-700 rounded-full mr-2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
