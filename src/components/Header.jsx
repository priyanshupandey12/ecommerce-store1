import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartSize = cartItems?.length;



  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-4">
        <NavLink to='/'>
          <h1 className="text-2xl font-bold">E-Commerce</h1>
        </NavLink>
    
        <div className="mt-4 lg:mt-0 space-x-6">
          <NavLink to='/'><button>Home</button></NavLink>
          <NavLink to='/carts'><button>Cart({cartSize})</button></NavLink>
          <NavLink to='/categories'><button>Categories</button></NavLink>
          <NavLink to='/about'><button>About us</button></NavLink>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
