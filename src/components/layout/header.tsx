"use client";
import { Menu, Bell, LogOut, Search } from "lucide-react";
import { useDashboardStore } from "../store/useDashboardStore";
import ThemeToggle from "./ThemeToggle"; 

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { user, logout } = useDashboardStore();

  return (
    <header className="h-16 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-30 px-4 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-4">
       
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg lg:hidden text-gray-600 dark:text-slate-400"
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 rounded-md px-3 py-1.5 gap-2 w-64">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full dark:text-white" />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <ThemeToggle />
        
        <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full">
          <Bell size={20} className="text-gray-600 dark:text-slate-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l dark:border-slate-800">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-bold dark:text-white capitalize">{user?.username}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{user?.role}</p>
          </div>
          <button onClick={logout} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}