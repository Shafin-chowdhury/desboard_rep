import { create } from 'zustand';

interface User {
  username: string;
  role: 'admin' | 'manager';
}

interface DashboardState {
  
  user: User | null;
  

  dateRange: string;
  userType: string;
  isLoading: boolean;
  error: string | null;

 
  login: (username: string, role: 'admin' | 'manager') => void;
  logout: () => void;
  setDateRange: (range: string) => void;
  setUserType: (type: string) => void;
  setLoading: (status: boolean) => void;
  setError: (msg: string | null) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  user: null, 
  dateRange: 'Last 12 months',
  userType: 'All Users',
  isLoading: false,
  error: null,

  login: (username, role) => set({ user: { username, role } }),
  logout: () => set({ user: null }),
  
  setDateRange: (range) => set({ dateRange: range }),
  setUserType: (type) => set({ userType: type }),
  setLoading: (status) => set({ isLoading: status }),
  setError: (msg) => set({ error: msg }),
}));