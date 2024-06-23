import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CARTIMAGE } from '../utils/constants';
const Header = () => {

  const cart = useSelector(state => state.cart);


  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Commerce Platform</h1>
        <nav className='flex justify-center items-center  gap-1'>
          <Link to="/" className="  font-bold">Home  
          </Link>
          <Link to="/cart"  className=' relative'>  <img className=' w-11  h-11 '  src={CARTIMAGE} alt="cart"  /> 
            <span  className=' px-4 py-2 absolute top-0  left-1  rounded-full text-white    text-sm  font-bold'>{cart.length}</span></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
