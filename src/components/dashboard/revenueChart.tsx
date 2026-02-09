"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboardStore } from '../store/useDashboardStore';

const fullData = [
  { month: 'Jan', revenue: 4000 }, { month: 'Feb', revenue: 5200 },
  { month: 'Mar', revenue: 4800 }, { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 5900 }, { month: 'Jun', revenue: 7200 },
  { month: 'Jul', revenue: 8100 }, { month: 'Aug', revenue: 7500 },
  { month: 'Sep', revenue: 9200 }, { month: 'Oct', revenue: 8800 },
  { month: 'Nov', revenue: 10500 }, { month: 'Dec', revenue: 12000 },
];

export default function RevenueChart() {
const { dateRange, isLoading } = useDashboardStore();

  
  const getFilteredData = () => {
    if (dateRange === 'Last 7 days') return fullData.slice(-2); 
    if (dateRange === 'Last 30 days') return fullData.slice(-4);
    return fullData;
  };

  if (isInitialLoading) {
    return (
      <div className="h-[300px] w-full bg-gray-50 animate-pulse rounded-lg flex items-center justify-center">
        <div className="w-full h-1/2 border-b border-gray-200 flex items-end justify-around px-4">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="w-1 bg-gray-200 h-full rounded-full" />
           ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={getFilteredData()}>
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
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            dot={{ r: 4, fill: '#3b82f6' }} 
            activeDot={{ r: 6 }} 
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}