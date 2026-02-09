"use client";
import { X, Home, BarChart2, Users, Settings, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; 
import { useDashboardStore } from "../store/useDashboardStore";

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  const { user, logout } = useDashboardStore();

  return (
    <>
      
      <div 
        className={cn(
          "fixed inset-0 bg-slate-950/40 z-[60] lg:hidden transition-opacity duration-500 backdrop-blur-md",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )} 
        onClick={() => setIsOpen(false)} 
      />

     
      <aside className={cn(
        "fixed inset-y-0 left-0 z-[70] w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-500 ease-in-out lg:static lg:translate-x-0 lg:z-auto",
        "flex flex-col h-screen", 
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        
        
        <div className="h-20 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Appify<span className="text-blue-600">Devs</span>
            </span>
          </div>
          
          <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
            <X size={20} />
          </button>
        </div>

        
        <nav className="flex-1 overflow-y-auto px-4 space-y-1 py-2 custom-scrollbar">
          <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Main Menu</p>
          <NavItem icon={<Home size={20}/>} label="Dashboard" active />
          <NavItem icon={<BarChart2 size={20}/>} label="Analytics" />
          <NavItem icon={<Users size={20}/>} label="Users" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
          
          
        </nav>

        
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center text-white font-bold shadow-md">
                {user?.username?.[0].toUpperCase() || "U"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate capitalize">{user?.username}</p>
                <p className="text-[10px] text-slate-500 truncate uppercase tracking-tighter">{user?.role}</p>
              </div>
            </div>
            <button 
              onClick={() => logout()}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white dark:bg-slate-800 text-red-500 text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors shadow-sm"
            >
              <LogOut size={14} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={cn(
      "group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden",
      active 
        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 translate-x-1" 
        : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400"
    )}>
      <div className="flex items-center space-x-3 relative z-10">
        <div className={cn(
          "transition-transform duration-300 group-hover:scale-110",
          active ? "text-white" : "text-slate-400 group-hover:text-blue-500"
        )}>
          {icon}
        </div>
        <span className="font-semibold text-sm tracking-wide">{label}</span>
      </div>
      <ChevronRight size={16} className={cn("relative z-10 transition-all", active ? "opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0")} />
      {active && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />}
    </div>
  );
}