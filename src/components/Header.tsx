import React from 'react';
import { Settings } from 'lucide-react';

interface HeaderProps {
  onSettingsClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="18" r="3" />
            <circle cx="12" cy="6" r="3" />
            <path d="M6 18V10a6 6 0 0 1 12 0v8" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800 tracking-tight">ForkForkChat</h1>
          <p className="text-xs text-gray-500">分支式对话</p>
        </div>
      </div>

      <button
        onClick={onSettingsClick}
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200"
      >
        <Settings className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">API配置</span>
      </button>
    </header>
  );
};
