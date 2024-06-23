import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setShowNotification(true);

    // Hide the notification after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
      <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">
          {product.description.substring(0, 100)}...
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="font-bold text-lg">${product.price}</span>
        <button 
          onClick={handleAddToCart} 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
      {showNotification && (
        <div className="fixed bottom-6 flex justify-center left-0 right-0 items-center  align-middle     w-[100%] z-20">
        <span className=' text-green-500  bg-gray-800 py-2 px-6 rounded ' >  Added to Cart! </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
