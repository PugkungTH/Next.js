import { create } from "zustand";

export interface Portfolio {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  skills: string;
  reason: string;
  faculty: string;
  university: string;
  image?: string; // base64 หรือ URL
}

interface PortfolioState {
  portfolios: Portfolio[];
  addPortfolio: (p: Portfolio) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  portfolios: [],
  addPortfolio: (p) => set((state) => ({ portfolios: [...state.portfolios, p] })),
}));
