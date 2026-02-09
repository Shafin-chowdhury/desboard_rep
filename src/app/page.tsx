"use client";
import React, { useEffect, useCallback, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useDashboardStore } from '@/components/store/useDashboardStore';
import { StatCard } from '@/components/dashboard/statCard';
import DashboardFilters from '@/components/dashboard/dashboardFilter';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { AlertCircle } from "lucide-react";


const RevenueChart = React.lazy(() => import("@/components/dashboard/revenueChart"));
const BarChart = React.lazy(() => import("@/components/dashboard/barChart"));
const UserPieChart = React.lazy(() => import("@/components/dashboard/userPieChart"));
const TrafficSourceChart = React.lazy(() => import("@/components/dashboard/trafficSourceChart"));

export default function DashboardPage() {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const { user, isLoading, error, setLoading, setError, dateRange } = useDashboardStore();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user, router]);

  const loadData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() < 0.05 ? reject(new Error("Connection Timeout")) : resolve(true);
        }, 1500);
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, user]);

  useEffect(() => {
    loadData();
  }, [loadData, dateRange]);

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-4 md:p-8 space-y-6">
          <DashboardFilters />

          {error ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-red-100 dark:border-red-900/30">
              <AlertCircle className="text-red-500 w-12 h-12 mb-4" />
              <button onClick={loadData} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Retry Sync</button>
            </div>
          ) : (
            <div className="space-y-6">
         
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value="$54,230" change="+12.5%" isPositive={true} isLoading={isLoading} />
                <StatCard title="Total Users" value="1,245" change="+5.2%" isPositive={true} isLoading={isLoading} />
                <StatCard title="Orders" value="342" change="-2.1%" isPositive={false} isLoading={isLoading} />
                <StatCard title="Conv. Rate" value="4.3%" change="+1.1%" isPositive={true} isLoading={isLoading} />
              </div>

              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartBox title="Revenue Trend">
                  <RevenueChart />
                </ChartBox>
                <ChartBox title="Order Volume">
                  <BarChart />
                </ChartBox>
              </div>

             
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
                <ChartBox title="Traffic Sources">
                  <TrafficSourceChart />
                </ChartBox>
                <ChartBox title="User Distribution">
                  <UserPieChart />
                </ChartBox>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function ChartBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <h3 className="font-bold mb-6 text-slate-800 dark:text-slate-100">{title}</h3>
      <Suspense fallback={<div className="h-[300px] w-full bg-slate-50 dark:bg-slate-800 animate-pulse rounded-xl" />}>
        {children}
      </Suspense>
    </div>
  );
}