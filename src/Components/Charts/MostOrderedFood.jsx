import React from 'react';

const foodItems = [
  { name: 'Fresh Salad Bowl', price: 'IDR 45.000', imageUrl: '/img3.png' },
  { name: 'Chicken Noodles', price: 'IDR 75.000', imageUrl: '/img4.png' },
  { name: 'Smoothie Fruits', price: 'IDR 45.000', imageUrl: '/img6.png' },
  { name: 'Hot Chicken Wings', price: 'IDR 45.000', imageUrl: '/img5.png' },
];

const MostOrderedFood = () => {
  return (
    <div className="pt-10 mr-auto px-5 xl:px-0 2xl:pr-[61px] xl:pr-4 xl:border-r-[0.5px] border-[#C8CBD9] border-b-[0.5px] xl:border-b-0 border-opacity-50">
      <h2 className="text-xl text-[#000000] mb-2">Most Ordered Food</h2>
      <p className="text-[#000000] opacity-50 mb-4">Adipiscing elit, sed do eiusmod tempor</p>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index} className={`flex items-center justify-between py-2 ${index !== foodItems.length - 1 ? 'border-b border-b-[#DBE5EB] border-opacity-80' : ''
            }`}>
            <div className="flex items-center">
              <img src={item.imageUrl} alt={item.name} className="w-10 h-10 rounded-full mr-4" />
              <span className='text-[#273240]'>{item.name}</span>
            </div>
            <span className="text-[#273240] opacity-70">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostOrderedFood;
