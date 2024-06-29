import React from 'react';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-base-100  border-b-[0.5px] border-[#C8CBD9]">
            <div className="bg-[#F1F2F7] shadow-lg shadow-[#C8CBD9] p-5 lg:w-[320px]">
                <a className="text-[#5A67BA] font-bold pl-3 text-xl"><span className='text-white bg-[#5A67BA] py-[3px] pl-2 pr-[6px] rounded-full mr-1'>G </span>Good Food</a>
            </div>
      
               <div className='lg:flex-1 px-4 xl:ml-10'>
               <div className="form-control lg:w-[600px] ">
                    <input type="text" placeholder="Search" className="input input-bordered w-40 md:w-auto" />
                </div>
               </div>
              <div className='flex items-center'>
              <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
              </div>
            </div>
   
    );
};

export default Navbar;