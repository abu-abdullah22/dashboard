import React from 'react';
import Barchart from '../../Components/Charts/Barchart';
import OrderChart from '../../Components/Charts/OrderChart';
import Rating from '../../Components/Charts/Rating'
import MostOrderedFood from '../../Components/Charts/MostOrderedFood';
import Sales from '../../Components/Charts/Sales';


const Dashboard = () => {
    return (
    
          <div>
            <h2 className='text-[#1F384C] text-[18px] font-medium ml-10 mt-10'>Dashboard</h2>
            <div className='md:grid grid-cols-2'>
            <Barchart />
            <OrderChart />
            </div>
            <div className='xl:grid grid-cols-3 mb-16'>
            <Rating />
            <MostOrderedFood />
            <Sales />
            </div>
        </div>
   
    );
};

export default Dashboard;