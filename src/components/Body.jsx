import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Products from './Products';

const Body = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  }

  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-start px-4 py-2 m-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {products.map((product) => (
        <NavLink key={product.id} to={`/products/${product.id}`} className="w-full md:w-1/4 lg:w-1/5 px-2 mb-4">
          <Products data={product} />
        </NavLink>
      ))}
    </motion.div>
  );
}

export default Body;
