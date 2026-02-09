import React, { memo } from 'react';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  isLoading?: boolean;
}

export const StatCard = memo(({ title, value, change, isPositive, isLoading }: StatCardProps) => {
  if (isLoading) {
    return (
      
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800 animate-pulse">
        <div className="h-4 w-24 bg-gray-200 dark:bg-slate-700 rounded mb-4" />
        <div className="h-8 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
      </div>
    );
  }

  return (
  
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      
     
      <p className="text-sm font-medium text-gray-500 dark:text-slate-400">{title}</p>
      
      <div className="flex items-end justify-between mt-2">
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
        
       
        <div className={cn(
          "flex items-center text-xs font-bold px-2 py-1 rounded-full",
          isPositive 
            ? "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400" 
            : "text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400"
        )}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
    </div>
  );
});

StatCard.displayName = "StatCard";