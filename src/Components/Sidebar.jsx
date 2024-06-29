import React from 'react';
import { Buy, Chart, Chat, Document, IconlyProvider, InfoSquare, Setting, Wallet } from 'react-iconly';
import { FaUser } from 'react-icons/fa';

const Sidebar = () => {
    const iconStyle = {
        color: '#A6ABC8',
        transition: 'color 0.3s ease',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.color = '#5A6ACF';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.color = '#A6ABC8';
    };

    return (
        <IconlyProvider set='bulk'
            stroke='bold'
            size='large'

        >
            <div className="drawer-side shadow-lg shadow-[#C8CBD9]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#F1F2F7] text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <h1 className='ml-4 text-lg text-[#082431] mb-2'>Menu</h1>
                    <li className='text-xl hover:bg-[#E4E6F4] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> <Chart filled /> <span className='text-[#273240] hover:text-[#5A6ACF]'>Dashboard</span></a></li>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}><Buy filled /> <span className='text-[#273240] hover:text-[#5A6ACF]'>Food Order</span></a></li>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> <Document filled /> <span className='text-[#273240] hover:text-[#5A6ACF]'>Manage Menu</span> </a></li>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}><Chat filled /> <span className='text-[#273240] hover:text-[#5A6ACF]'>Customer Review </span></a></li>

                    <h1 className='ml-4 text-lg text-[#082431] mt-8 mb-2'>Others</h1>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> <Setting filled /> <span className='text-[#273240] hover:text-[#5A6ACF]'>Settings</span></a></li>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> <Wallet /> <span className='text-[#273240] hover:text-[#5A6ACF]'>Payment</span></a></li>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> <FaUser className='w-[26.67px] h-[26px]' /> <span className='text-[#273240] hover:text-[#5A6ACF]'> Accounts</span></a></li>
                    <li className='text-[#273240] text-xl hover:bg-[#E4E6F4] hover:text-[#5A6ACF] mb-2'><a style={iconStyle} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> <InfoSquare filled /> <span className='text-[#273240] hover:text-[#5A6ACF]'>Help</span></a></li>
                </ul>
            </div>
        </IconlyProvider>

    );
};

export default Sidebar;