import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import NewsLetter from '../NewsLetter';

const data = [
    { name: 'Afternoon', value: 40 },
    { name: 'Evening', value: 32 },
    { name: 'Morning', value: 28 },

];
const COLORS = ['#5A6ACF', '#8593ED', '#8593ED'];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <div className='mt-10 md:ml-10 mr-10 overflow-x-auto'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <h2 className='text-[#000000] text-xl ml-10'>Order Time</h2>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className='text-[#5A6ACF] bg-[#DDE4F0]  btn bg-opacity-50'>View Report</button>
                        <dialog id="my_modal_1" className="modal">
                            <NewsLetter />
                        </dialog>
                    </div>
                </div>
                <PieChart width={250} height={400} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                </PieChart>
            </div>
        );
    }
}
