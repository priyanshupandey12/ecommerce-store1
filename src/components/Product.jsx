import React, { useEffect, useState } from 'react';
import { addItems } from '../utils/cartSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    Details();
  }, [productId]);

  const Details = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const json = await data.json();
    setProductDetails(json);
  }

  if (!productDetails) {
    return <div className="flex justify-center items-center h-screen">Loading product details...</div>;
  }

  const handleAddToCart = () => {
    if (productDetails) {
      dispatch(addItems(productDetails));
    }
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={productDetails.image} alt={productDetails.title} className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{productDetails.title}</h2>
          <p className="text-xl text-gray-700 mb-6">₹ {productDetails.price}</p>
          <p className="text-lg text-gray-700 mb-6">{productDetails.description}</p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <button className="py-2 px-6 bg-yellow-300 text-white hover:bg-yellow-400 rounded-lg transition duration-300" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="py-2 px-6 bg-yellow-600 text-white hover:bg-blue-700 rounded-lg transition duration-300" onClick={handleAddToCart}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
