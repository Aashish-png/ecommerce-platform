import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../reducers/cartSlice';
// import { removeItem } from '../reducers/cartSLice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  console.log("cart ", cart )
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cart.map(item => (
            <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img className="w-full h-64 object-cover" src={item.image} alt={item.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  {item.description.substring(0, 100)}...
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <span className="font-bold text-lg">${item.price}</span>
                <span className="font-bold text-lg">Quantity: {item.quantity}</span>
                <button 
                  onClick={() => handleRemoveFromCart(item.id)} 
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
