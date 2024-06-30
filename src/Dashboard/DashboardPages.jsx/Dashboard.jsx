import React from 'react';
import Barchart from '../../Components/Barchart';

const Dashboard = () => {
    return (
    
          <div>
            <h2 className='text-[#1F384C] text-[18px] font-medium ml-10 mt-10'>Dashboard</h2>
            <div className='md:grid grid-cols-2'>
            <Barchart />
            </div>
        </div>
   
    );
};

export default Dashboard;