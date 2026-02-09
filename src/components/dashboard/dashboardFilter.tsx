"use client";
import { Calendar, Filter, RefreshCw, ChevronDown } from "lucide-react";
import { useDashboardStore } from "../store/useDashboardStore";
import { cn } from "@/lib/utils";

export default function DashboardFilters() {
  const { dateRange, userType, setDateRange, setUserType, isLoading } = useDashboardStore();

  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center p-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300">
      
      <div className="flex flex-1 flex-col sm:flex-row gap-2 w-full p-1">
        
       
        <div className="relative flex-1 group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors group-focus-within:text-blue-500 text-slate-400">
            <Calendar size={18} />
          </div>
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent dark:border-slate-700/50 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 appearance-none cursor-pointer transition-all outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 12 months</option>
          </select>
          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

      
        <div className="relative flex-1 group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors group-focus-within:text-blue-500 text-slate-400">
            <Filter size={18} />
          </div>
          <select 
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent dark:border-slate-700/50 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 appearance-none cursor-pointer transition-all outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            <option>All Users</option>
            <option>Free Users</option>
            <option>Premium Users</option>
            <option>Enterprise</option>
          </select>
          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      
      <div className="px-6 py-2 flex items-center gap-3">
        {isLoading ? (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold animate-pulse">
            <RefreshCw size={14} className="animate-spin" />
            Synchronizing...
          </div>
        ) : (
          <div className="flex flex-col items-end">
             <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Data Status</span>
             <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 italic">
               Live: {dateRange}
             </span>
          </div>
        )}
      </div>
    </div>
  );
}