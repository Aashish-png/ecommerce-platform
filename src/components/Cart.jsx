import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../reducers/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const handleProceedToCheckout = () => {
    alert('Proceeding to checkout');
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-9">
              {cart.map(item => (
                <div key={item.id} className="flex flex-col lg:flex-row items-center border-b pb-4 mb-4">
                  <img className="w-32 h-32 object-contain" src={item.image} alt={item.title} />
                  <div className="flex flex-col justify-between ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-700">In stock</p>
                    <p className="text-gray-700">Sold by: {item.seller}</p>
                    <p className="text-gray-700">Size: {item.size}</p>
                    <p className="text-gray-700">Color: {item.color}</p>
                    <div className="flex items-center mt-2">
                      <label htmlFor="quantity" className="mr-2">Qty:</label>
                      <select
                        id="quantity"
                        value={item.quantity}
                        onChange={(e) => dispatch(updateItemQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                        className="border rounded p-1"
                      >
                        {[...Array(10).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 ml-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="ml-auto text-lg font-semibold">
                    ₹{item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <div className="sticky  top-24 bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-semibold mb-4">Subtotal ({cart.length} items): ₹{getTotalPrice().toFixed(2)}</h3>
                <button
                  onClick={handleProceedToCheckout}
                  className="bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-yellow-600"
                >
                  Proceed to Buy
                </button>
                <div className="mt-4">
                  <select className="w-full border rounded p-2">
                    <option>EMI Available</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
