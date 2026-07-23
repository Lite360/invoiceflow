import React from 'react';
import {
  LayoutDashboard,
  FileSpreadsheet,
  FileCheck,
  Receipt,
  FileText,
  History,
  Settings,
  Plus,
  Sparkles,
} from 'lucide-react';
import { Company } from '../types';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  company: Company | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, company }) => {
  const primaryColor = company?.primaryColor || '#0f172a';

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'invoices', label: 'Invoices', icon: FileSpreadsheet },
    { id: 'quotations', label: 'Quotations', icon: FileCheck },
    { id: 'receipts', label: 'Receipts', icon: Receipt },
    { id: 'letters', label: 'Letters', icon: FileText },
    { id: 'history', label: 'History', icon: History },
    { id: 'settings', label: 'Company Settings', icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-lg border-b border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Logo & Name */}
          <div
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer group min-w-0"
            onClick={() => setCurrentView('dashboard')}
          >
            {company?.logoUrl ? (
              <img
                src={company.logoUrl}
                alt="Logo"
                className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
              />
            ) : (
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md flex-shrink-0">
                BD
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center min-w-0">
              <span className="font-bold text-base md:text-lg tracking-tight group-hover:text-blue-400 transition truncate">
                {company?.companyName || 'BrandDocs'}
              </span>
              <span className="hidden sm:inline-block sm:ml-2 px-2 py-0.5 text-[9px] md:text-[10px] uppercase font-bold tracking-widest bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 flex-shrink-0">
                Single Owner MVP
              </span>
            </div>
          </div>

          {/* Main Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Dropdown / Button */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => setCurrentView('invoices')}
              className="flex items-center space-x-1.5 px-3 py-1.5 md:px-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-semibold rounded-lg shadow-md shadow-blue-600/20 transition"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Document</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
