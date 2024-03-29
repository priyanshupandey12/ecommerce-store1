import React from 'react';

const Women = ({ data }) => {
  console.log(data);

  return (
    <div className="hidden lg:block w-56 h-auto py-2 mx-4 my-4 px-2 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className='w-full h-auto'>
        <img src={data.image} alt='image' className='w-full h-auto' />
        {data?.rating?.rate >= 4 && <span className='absolute top-0 left-0 bg-yellow-600 text-white px-3 py-1 rounded-sm'>Bestseller</span>}
      </div>
      <div className="p-4">
        <h3 className='text-gray-900 font-semibold text-lg py-2'>{data.title}</h3>
        <p className='py-2'>Rating: {data.rating?.rate}</p>
        <p className='py-1'> ₹ {data.price}</p>
      </div>
    </div>
  );
};

export default Women;
