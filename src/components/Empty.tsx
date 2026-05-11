import React from 'react';
import { MessageSquare, GitBranch, ArrowRight } from 'lucide-react';

export default function Empty() {
  return (
    <div className="flex h-full items-center justify-center p-8">
      <div className="text-center max-w-md animate-fadeIn">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <MessageSquare className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
            <GitBranch className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          开始你的对话
        </h3>
        
        <p className="text-gray-500 mb-6 leading-relaxed">
          输入消息开始对话，针对AI回复可以创建分支进行深入讨论
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          <span>配置API后即可开始</span>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            <span className="text-xs text-gray-600">主对话</span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-300" />
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
            <GitBranch className="w-4 h-4 text-purple-500" />
            <span className="text-xs text-gray-600">分支讨论</span>
          </div>
        </div>
      </div>
    </div>
  );
}
