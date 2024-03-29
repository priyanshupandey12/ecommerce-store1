import React from 'react';

const Men = ({ data }) => {
  console.log(data);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
      <div className='w-full sm:w-72 h-auto py-2 mx-2 my-4 px-2 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105'>
        <img src={data.image} alt='image' className='w-full h-auto' />
        {data.rating?.rate >= 4 && <span className='absolute top-0 left-0 bg-yellow-600 text-white px-3 py-1 rounded-sm'>Bestseller</span>}
        <div className="p-4">
          <h3 className='text-gray-900 font-semibold text-lg py-2'>{data.title}</h3>
          <p className='py-2'>Rating: {data.rating?.rate}</p>
          <p className='py-1'> ₹ {data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Men;
