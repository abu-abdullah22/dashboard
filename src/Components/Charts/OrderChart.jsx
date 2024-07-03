import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import NewsLetter from '../Shared/NewsLetter';


const data = [
    { name: 'Afternoon', value: 40, time: '1pm - 4pm', orders: 1.890 },
    { name: 'Evening', value: 32, time: '4pm - 8pm', orders: 1.512 },
    { name: 'Morning', value: 28, time: '9am - 12pm', orders: 1.322 },
];

const CustomTooltip = ({ payload }) => {
    if (payload && payload.length > 0) {
        const { name, orders, time } = payload[0].payload;
        return (
            <div className="relative">
                <div className="bg-[#37375C] text-white p-4 rounded-md w-48 relative z-10">
                    <p className="text-[12px] font-medium">{`${name}`}</p>
                    <p className="text-[12px] opacity-50">{`${time}`}</p>
                    <p className="text-[16px] font-medium">{`${orders}`} orders</p>
                </div>
                <div className="absolute bg-[#37375C] h-2 w-2 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2 z-0"></div>
            </div>
        );
    }
    return null;
};


const COLORS = ['#5A6ACF', '#8593ED', '#C7CEFF',];

const CustomLegend = () => (
    <div className='flex gap-16 mx-20'>
        {data.map((entry, index) => (
            <div key={`${index}`} >
                <div className='flex items-center'>
                    <div style={{ backgroundColor: COLORS[index % COLORS.length], width: '12px', height: '12px', marginRight: '8px' }} className='rounded-full'></div>
                    <div className="font-medium text-[#121212] opacity-70">{entry.name}</div>
                </div>
                <div className="text-[#121212] opacity-70 ml-5">{entry.value}</div>
            </div>
        ))}
    </div>
);
export default class Example extends PureComponent {
    render() {
        return (
            <div className='mt-[30px] mr-10 border-opacity-50 overflow-x-auto border-b-[0.5px] border-b-[#C8CBD9]'>
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[#000000] text-xl ml-10'>Order Time</h2>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className='text-[#5A6ACF] bg-[#DDE4F0] btn bg-opacity-50'>View Report</button>
                        <dialog id="my_modal_1" className="modal">
                            <NewsLetter />
                        </dialog>
                    </div>
                    <p className='text-[#A0A0A0] ml-10'>From 1-6 Dec, 2020</p>
                </div>
                <ResponsiveContainer width="70%" height={400}>
                    <PieChart >
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            startAngle={90}
                            endAngle={-275}
                            cornerRadius={0}
                            paddingAngle={0}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={CustomTooltip} />
                        <Legend content={CustomLegend} />

                    </PieChart>
                </ResponsiveContainer>
                <div className='mb-10'></div>
            </div>
        );
    }
}
