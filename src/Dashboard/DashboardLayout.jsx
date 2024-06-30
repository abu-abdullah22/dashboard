import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import OpenSidebar from '../Components/Sidebar/OpenSidebar';


const DashboardLayout = () => {

    return (
        <div className="drawer lg:drawer-open mt-10 lg:mt-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <OpenSidebar />
            <Sidebar />
        </div>
    );
};

export default DashboardLayout;