import React from 'react';

const OpenSidebar = () => {
    return (
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn bg-[#8382DE] text-white drawer-button lg:hidden">
                Open sidebar
            </label>
        </div>

    );
};

export default OpenSidebar;