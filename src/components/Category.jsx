import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Men from './Men';
import Women from './Women';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    const men = products.filter(product => product.category === "men's clothing");
    setMenProducts(men);
  }, [products]);

  useEffect(() => {
    const women = products.filter(product => product.category === "women's clothing");
    setWomenProducts(women);
  }, [products]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
      <div className="text-center md:w-1/2">
        <button onClick={() => handleCategoryClick("men")} className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${activeCategory === "men" ? 'hidden' : ''}`}>
          Men's Clothing
        </button>
        {activeCategory === "men" && (
          <div className='flex flex-wrap justify-center mt-4'>
            {menProducts.map(product => (
              <NavLink to={`/categories/men`} key={product.id}>
                <Men data={product} />
              </NavLink>
            ))}
          </div>
        )}
      </div>
      <div className="text-center md:w-1/2">
        <button onClick={() => handleCategoryClick("women")} className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded ${activeCategory === "women" ? 'hidden' : ''}`}>
          Women's Clothing
        </button>
        {activeCategory === "women" && (
          <div className='flex flex-wrap justify-center mt-4'>
            {womenProducts.map(product => (
              <NavLink to={`/categories/women`} key={product.id}>
                <Women data={product} />
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
