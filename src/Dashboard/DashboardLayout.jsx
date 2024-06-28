import React from 'react';
import { RiBarChartBoxFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open mt-10 lg:mt-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-[#8382DE] text-white drawer-button lg:hidden">
                    Open sidebar
                </label>
            </div>
            <div className="drawer-side shadow-lg shadow-[#C8CBD9]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#F1F2F7] text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <h1 className='ml-4 text-lg text-[#082431] mb-2'>Menu</h1>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF]'><a> <RiBarChartBoxFill className='text-3xl rounded-full' /> Dashboard</a></li>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF]'><a><FaCartShopping className='text-2xl' /> Food Order</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;