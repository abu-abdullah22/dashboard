import React from 'react';
import { ArrowUp, IconlyProvider } from 'react-iconly';

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import NewsLetter from '../NewsLetter';

const data = [
    { date: '01', lastWeek: 3000, last6Days: 2000 },
    { date: '02', lastWeek: 2000, last6Days: 2200 },
    { date: '03', lastWeek: 2780, last6Days: 2500 },
    { date: '04', lastWeek: 1890, last6Days: 2100 },
    { date: '05', lastWeek: 2390, last6Days: 2900 },
    { date: '06', lastWeek: 3490, last6Days: 4200 },
    { date: '07', lastWeek: 3490, last6Days: 4100 },
    { date: '08', lastWeek: 3490, last6Days: 3800 },
    { date: '09', lastWeek: 3490, last6Days: 3600 },
    { date: '10', lastWeek: 3490, last6Days: 3400 },
    { date: '11', lastWeek: 3490, last6Days: 4000 },
    { date: '12', lastWeek: 3490, last6Days: 4200 },
];
const COLORS = ['#5A6ACF', '#E6E8EC'];

const CustomLegend = ({ payload }) => (
    <div className='flex gap-16 mt-6'>
        {payload.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
                <div className="rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length], width: '12px', height: '12px', marginRight: '8px' }}></div>
                <div className="legend-text font-medium text-[#121212] opacity-70">{entry.value}</div>
            </div>
        ))}
    </div>
);


const Barchart = () => {
    return (
        <IconlyProvider>
            <div className='ml-10 mt-10  overflow-x-auto border-b-[0.5px] border-b-[#C8CBD9] pb-10 border-r-[0.5px] border-r-[#C8CBD9] pr-10'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <h2 className='text-[#000000] text-xl'>Revenue</h2>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className='text-[#5A6ACF] bg-[#DDE4F0]  btn bg-opacity-50'>View Report</button>
                        <dialog id="my_modal_1" className="modal">
                            <NewsLetter />
                        </dialog>
                    </div>
                    <p className='text-[#000000] text-2xl font-medium'>IDR 7.852.000</p>
                    <p className='flex items-center gap-1 text-[#737B8B]'><span className='text-[#149D52] flex items-center '><ArrowUp />2.1%</span> vs last week</p>
                </div>

                <p className='text-[#000000] text-[17px] mt-6
                 opacity-50'>Sales from 1-12 Dec, 2020</p>

                <BarChart
                    width={678}
                    height={250}
                    data={data} barCategoryGap={15} barGap={8}
                    margin={{ top: -10, right: 0, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" axisLine={{ stroke: '#737B8B' }} tickLine={false} stroke='#737B8B' />
                    <Tooltip />
                    <Legend content={CustomLegend} />
                    <Bar dataKey="last6Days" fill="#5A6ACF" name="Last 6 days" />
                    <Bar dataKey="lastWeek" fill="#E6E8EC" name="Last Week" />
                </BarChart>
            </div>
        </IconlyProvider>
    );
};

export default Barchart;