"use client";
import React, { useState, useEffect } from 'react'; 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { month: 'Jan', orders: 45 }, { month: 'Feb', orders: 52 },
  { month: 'Mar', orders: 48 }, { month: 'Apr', orders: 61 },
  { month: 'May', orders: 55 }, { month: 'Jun', orders: 67 },
  { month: 'Jul', orders: 72 }, { month: 'Aug', orders: 65 },
  { month: 'Sep', orders: 81 }, { month: 'Oct', orders: 75 },
  { month: 'Nov', orders: 85 }, { month: 'Dec', orders: 94 },
];

export default function OrdersBarChart() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

 
  if (isLoading) {
    return (
      <div className="h-[300px] w-full flex flex-col justify-end gap-2 px-2">
        <div className="flex items-end justify-between h-full w-full pb-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 animate-pulse rounded-t-sm"
              style={{
                height: `${Math.floor(Math.random() * 60) + 20}%`,
                width: '6%',
              }}
            />
          ))}
        </div>
       
        <div className="flex justify-between w-full border-t border-gray-100 pt-2">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="h-3 w-8 bg-gray-100 animate-pulse rounded" />
           ))}
        </div>
      </div>
    );
  }

  
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#9ca3af', fontSize: 12}} 
            dy={10} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#9ca3af', fontSize: 12}} 
          />
          <Tooltip 
            cursor={{fill: '#f8fafc'}}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
          />
          <Bar 
            dataKey="orders" 
            fill="#3b82f6" 
            radius={[4, 4, 0, 0]} 
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#60a5fa'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}