import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { DealixCard } from '../cards/DealixCard';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="ml-[240px] transition-all duration-300">
        {/* Top bar with credit card */}
        <div className="fixed top-0 right-0 left-[240px] z-30 p-6 flex justify-end">
          <DealixCard />
        </div>

        {/* Page content */}
        <main className="pt-32 px-8 pb-8">
          {children}
        </main>
      </div>
    </div>
  );
};