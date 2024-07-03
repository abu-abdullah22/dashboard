import React from 'react';
import { Notification } from 'react-iconly';

const Options = () => {
    return (
        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-[250px] p-2 shadow inter">
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
    );
};

export default Options;