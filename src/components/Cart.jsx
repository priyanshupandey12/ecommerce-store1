import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { decrementQuantity, incrementQuantity, removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  function handleClickAdd(id) {
    dispatch(incrementQuantity(id));
  }

  function handleClickSub(id) {
    dispatch(decrementQuantity(id));
  }

  function handleClear(id) {
    dispatch(removeItem(id));
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col justify-center items-center lg:w-1/2 pt-16'>
        {cartItems?.length === 0 && (
          <motion.img 
            src='https://cdn4.iconfinder.com/data/icons/shopping-460/200/empty-cart-512.png' 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
          />
        )}
        {cartItems.map((item) => (
          <motion.div 
            key={item.id} 
            className='flex flex-col lg:flex-row border lg:w-[500px] bg-white shadow-md m-3 px-5 py-5 rounded-lg transform transition-transform hover:scale-105'
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }} 
          >
            <motion.img 
              src={item?.image} 
              className='w-24 lg:w-36'
              whileHover={{ scale: 1.1 }} 
            />
            <div className='lg:px-4 lg:py-4 mt-4 lg:mt-0'>
              <p className='font-semibold p-1'>{item?.title}</p>
              <p className='font-semibold p-1'>Price: ₹ {item?.price}</p>
              <div className='flex pl-2 bg-slate-100 w-24'>
                <button className='m-2 hover:text-red-800 ' onClick={() => handleClickSub(item.id)}>
                  <RiSubtractLine />
                </button>
                <p className='m-1'>{item.quantity}</p>
                <button className='m-2 hover:text-green-800' onClick={() => handleClickAdd(item.id)}>
                  <IoMdAdd />
                </button>
              </div>
            </div>
            <motion.button 
              className='pl-5' 
              onClick={() => handleClear(item.id)}
              whileHover={{ scale: 1.2 }} 
            >
              ☓
            </motion.button>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className='lg:ml-4 lg:w-1/2 flex flex-col justify-center' 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }} 
      >
        <h2 className="font-semibold text-lg mb-2">Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-1">
            <p>{item.title}</p>
            <p>₹ {item.price.toFixed(2)} x {item.quantity}</p>
          </div>
        ))}
        <hr className="my-2" />
        <p className="font-semibold">Total Price: ₹ {totalPrice.toFixed(2)}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2">
          Place Order
        </button>
      </motion.div>
    </div>
  );
};

export default Cart;
