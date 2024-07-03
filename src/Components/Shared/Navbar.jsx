import React from 'react';
import { ChevronDown, IconlyProvider, Notification, Search } from 'react-iconly';
import { FaBell } from 'react-icons/fa';
import Options from './Options';

const Navbar = () => {
    return (
        <IconlyProvider>
            <div className="flex justify-between items-center border-b-[0.5px] border-[#C8CBD9]">
                <div className="bg-[#F1F2F7] shadow-lg shadow-[#C8CBD9] p-5 lg:w-[320px]">
                    <a className="text-[#5A67BA] font-bold pl-3 md:text-xl"><span className='text-white bg-[#5A67BA] py-[3px] pl-2 pr-[6px] rounded-full mr-1'>G </span>Good Food</a>
                </div>

                <div className='lg:flex-1 px-4 xl:ml-10'>

                    <div className="form-control xl:w-[600px] relative">
                        <input type="text" placeholder="Search" className="input w-40 md:w-auto bg-[#F5F6FB]" /> <Search style={{ color: '#627B87', opacity: '0.5' }} className='absolute top-3 right-[10px]' />
                    </div>

                </div>
                <div className='md:flex items-center md:mr-8'>

                    <div className="dropdown dropdown-bottom dropdown-end mr-5">
                        <div tabIndex={0} role="button">
                            <div className='md:flex items-center gap-3 md:mr-3'>
                                <p className='p-3   bg-[#FFE6CC] rounded-full'>🍔</p>
                                <p className='text-[#1F384C] text-sm lg:text-xl flex items-center gap-1'>Delicious Burger <ChevronDown style={{ color: '#1F384C', opacity: '0.5' }} /> </p>
                            </div>

                        </div>
                       <Options />
                    </div>
                </div>

                <div className="relative flex items-center">
                    <FaBell className="text-2xl text-[#B0C3CC] md:mr-10" />
                    <img
                        src="/sign.png"
                        alt="sign"
                        className="absolute transform translate-x-3 -translate-y-2 w-[12px]"
                    />
                </div>
            </div>
        </IconlyProvider>
    );
};

export default Navbar;