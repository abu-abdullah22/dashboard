import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NewsLetter from '../Shared/NewsLetter';
import { ArrowUp } from 'react-iconly';

const data = [
  { date: '01', last6days: 2400, lastWeek: 4000 },
  { date: '02', last6days: 1398, lastWeek: 6210 },
  { date: '03', last6days: 6800, lastWeek: 3000 },
  { date: '04', last6days: 5000, lastWeek: 7000 },
  { date: '05', last6days: 1000, lastWeek: 3181 },
  { date: '06', last6days: 9800, lastWeek: 8500 },
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

const Sales = () => {
  return (
    <div className='px-10 pt-10 '>
       <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <h2 className='text-[#000000] text-xl'>Revenue</h2>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className='text-[#5A6ACF] bg-[#DDE4F0]  btn bg-opacity-50'>View Report</button>
                        <dialog id="my_modal_1" className="modal">
                            <NewsLetter />
                        </dialog>
                    </div>
                    <p className='text-[#000000] text-2xl font-medium'>2.568</p>
                    <p className='flex items-center gap-1'><span className='text-[#F2383A] flex items-center '><ArrowUp />2.1%</span> <span className='text-[#737B8B] opacity-50'>vs last week</span></p>
                </div>
      <div>
        <p className="text-[#000000] opacity-50">Sales from 1-6 Dec, 2020</p>
      </div>
      <div className="mt-4">
        <ResponsiveContainer width={"100%"} height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" axisLine={{ stroke: '#737B8B' }} tickLine={false} stroke='rgba(115, 123, 139, 0.5)' interval={0} padding={{ left: 10, right: 10 }} />
            <Tooltip />
            <Legend content={CustomLegend}/>
            <Line dot={false} dataKey="last6days" stroke="#5A6ACF" />
            <Line dot={false}  dataKey="lastWeek" stroke="#E6E8EC" />
          </LineChart>
        </ResponsiveContainer>
      </div>
  
     
    </div>
  );
};

export default Sales;
