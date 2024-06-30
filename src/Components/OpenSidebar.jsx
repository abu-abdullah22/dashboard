import React from 'react';
import { Outlet } from 'react-router-dom';

const OpenSidebar = () => {
    return (
        <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn bg-[#8382DE] text-white lg:hidden">
                Open sidebar
            </label>
            <Outlet />
        </div>

    );
};

export default OpenSidebar;