import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative cursor-pointer">
      <Link to={`/products/${product.id}`}>
        <img className="w-full h-64 object-contains" src={product.image} alt={product.title} />
        <div className="px-6 py-4 h-40">
          <div className="font-bold text-xl mb-2 lineClamp overflow-hidden h-20">{product.title.substring(0, 70)}</div>
          <p className="text-gray-700 text-base">
            {product.description.substring(0, 70)}...
          </p>
        </div>
      </Link>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="font-bold text-lg">₹{product.price}</span>
        <button 
          onClick={handleAddToCart} 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
      {showNotification && (
        <div className="fixed bottom-6 flex justify-center left-0 right-0 items-center align-middle w-full z-20">
        <span className="text-green-500 bg-gray-800 py-2 px-6 rounded font-bold text-xl" style={{ backgroundColor: '#00000099', backdropFilter: 'blur(22px)', color: '#00fa34' }}>
          Added to Cart!
        </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
