import React from 'react';
import { ChevronDown, IconlyProvider, Notification, Search } from 'react-iconly';
import { FaBell } from 'react-icons/fa';

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
                <div className='md:flex items-center'>
                    <div className='flex items-center gap-3 md:mr-8'>
                        <p className='p-3 bg-[#FFE6CC] rounded-full'>🍔</p>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end mr-5">
                        <div tabIndex={0} role="button">
                            <p className='text-[#1F384C] text-sm lg:text-xl flex items-center gap-1'>Delicious Burger <ChevronDown style={{ color: '#1F384C', opacity: '0.5' }} /> </p>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-[250px] p-2 shadow">
                            <li className='my-4'><a> <Notification className='text-[#4F4F4F]' /> <span className='text-[#1D1D1D] text-[14px]'>Option 1</span></a></li>
                            <li className='my-4'><a> <Notification className='text-[#4F4F4F]' /> <span className='text-[#1D1D1D] text-[14px'>Option 2</span></a></li>
                            <li className='my-4'><a> <Notification className='text-[#4F4F4F]' /> <span className='text-[#1D1D1D] text-[14px] '>Option 3</span></a></li>

                            <div className='border-b-[1px] border-b-[#0000000D]'>

                            </div>

                            <li className='my-4'><a> <Notification className='text-[#4F4F4F]' /> <span className='text-[#1D1D1D] text-[14px]'>Option 4</span></a></li>
                            <li className='my-4'><a> <Notification className='text-[#4F4F4F]' /> <span className='text-[#1D1D1D] text-[14px]'>Option 5</span></a></li>
                            <li className='my-4'><a> <Notification className='text-[#4F4F4F]' /> <span className='text-[#1D1D1D] text-[14px]'>Option 6</span></a></li>

                            <div className='border-b-[1px] border-b-[#0000000D]'> </div>

                            <li className='my-4'><a> <Notification className='text-[#4F4F4F]' /> <span className='text-[#1D1D1D] text-[14px]'>Option 7</span></a></li>

                        </ul>
                    </div>
                </div>

                <div>
                    <FaBell className="text-2xl text-[#B0C3CC] md:mr-10 relative" />
                    <img src="/sign.png" alt="sign" className='absolute md:top-[35px] top-[45px] lg:top-[20px] right-0 w-[12px] md:right-10' />
                </div>
            </div>
        </IconlyProvider>
    );
};

export default Navbar;