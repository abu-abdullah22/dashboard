import React from 'react';

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
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;