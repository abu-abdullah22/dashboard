import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Rating = () => {
  const ratings = [
    { label: 'Hygiene', value: 85, color: '#6463D6', size: 120 },
    { label: 'Food Taste', value: 85, color: '#F99C30', size: 200 },
    { label: 'Packaging', value: 92, color: '#2FBFDE', size: 140 },
  ];

  return (
    <div className="ml-10 py-10 md:border-r-[0.5px] border-r-[#C8CBD9]">
      <h3 className="text-xl font-semibold mb-2">Your Rating</h3>
      <p className="text-[#000000] opacity-50 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
      <div className="flex flex-col xl:flex-row flex-wrap justify-center gap-4"> 
        <div className="flex flex-col xl:flex-row items-center relative gap-3">
          {ratings.slice(0, 2).map((rating, index) => (
            <div
              key={rating.label}
              className={`relative ${index === 0 ? 'xl:-translate-x-[-120px] xl:-translate-y-12' : ''} z-${index === 0 ? 10 : 0}`}
              style={{ width: `${rating.size}px`, height: `${rating.size}px` }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'completed', value: rating.value },
                    ]}
                    innerRadius="70%"
                    outerRadius="80%"
                    startAngle={90}
                    endAngle={-180}
                    dataKey="value"
                  >
                    <Cell key="completed" fill={rating.color} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-[13px] text-center rounded-full" style={{ backgroundColor: `${rating.color}`, width: `${rating.size * 0.6}px`, height: `${rating.size * 0.6}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {rating.value}% <br />
                  {rating.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center xl:mt-[-135px] 2xl:mr-[219px] xl:mr-[130px]">
          {ratings.slice(2).map((rating) => (
            <div key={rating.label} className="flex justify-center">
              <div className="relative" style={{ width: `${rating.size}px`, height: `${rating.size}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'completed', value: rating.value },
                        { name: 'remaining', value: 100 - rating.value },
                      ]}
                      innerRadius="70%"
                      outerRadius="80%"
                      startAngle={90}
                      endAngle={-200}
                      dataKey="value"
                    >
                      <Cell key="completed" fill={rating.color} />
                      <Cell key="remaining" fill="#FFF" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-[13px] text-center rounded-full" style={{ backgroundColor: `${rating.color}`, width: `${rating.size * 0.6}px`, height: `${rating.size * 0.6}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {rating.value}% <br />
                    {rating.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
