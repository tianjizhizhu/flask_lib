import React, { useState, useEffect } from 'react';
import { MessageSquare, GitBranch, ArrowLeftRight, Monitor, Smartphone, Tablet, ChevronRight, Sparkles, GitFork, Zap, Layers } from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-x-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            left: `calc(20% + ${mousePosition.x}px)`,
            top: `calc(30% + ${mousePosition.y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            right: `calc(15% - ${mousePosition.x}px)`,
            bottom: `calc(20% - ${mousePosition.y}px)`,
            transform: 'translate(50%, 50%)'
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"/>
      </div>

      {/* Hero Section */}
      <header className="relative px-6 py-24 md:py-40 max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>重新定义 AI 对话方式</span>
          </div>
          
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
              Fork
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Fork</span>
              </h1>
              <GitFork className="w-16 h-16 md:w-20 md:h-20 text-indigo-400 animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white/90">Chat</h1>
            </div>
            
            {/* Floating branch visualization */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <svg className="w-full h-48 -mt-8 opacity-20" viewBox="0 0 400 100">
                <path d="M200 80 C 150 80, 100 60, 60 30" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite"/>
                </path>
                <path d="M200 80 C 250 80, 300 60, 340 30" stroke="url(#gradient2)" strokeWidth="2" fill="none" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite"/>
                </path>
                <circle cx="60" cy="30" r="4" fill="#818cf8" className="animate-ping"/>
                <circle cx="340" cy="30" r="4" fill="#c084fc" className="animate-ping"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#818cf8"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#c084fc"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            像代码分支一样管理你的 AI 对话
            <br />
            <span className="text-indigo-400 font-semibold">锚定 · 分支 · 同步</span>
          </p>
          
          <button
            onClick={onEnterApp}
            className="group relative px-10 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl text-lg font-bold hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageSquare className="w-6 h-6" />
              开始对话
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          </button>
        </div>
      </header>

      {/* Feature Demo Section */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">核心功能</h2>
            <p className="text-lg text-slate-400">三大创新设计，重新定义 AI 对话体验</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Anchor */}
            <div className={`group relative p-8 bg-gradient-to-b from-indigo-500/10 to-purple-500/5 rounded-3xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-500 delay-100 backdrop-blur-sm hover:shadow-2xl hover:shadow-indigo-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"/>
              <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/30">
                <GitFork className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">锚定对话</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                针对 AI 回复中的任意片段创建锚点，像 Word 批注一样精准定位讨论内容，不再迷失在长篇回复中。
              </p>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-300">
                      机器学习是一种让计算机通过数据...
                      <span className="ml-2 bg-indigo-500/30 text-indigo-300 px-2 py-1 rounded text-xs font-medium border border-indigo-500/50">锚定</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Branch */}
            <div className={`group relative p-8 bg-gradient-to-b from-purple-500/10 to-pink-500/5 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 delay-200 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"/>
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">分支讨论</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                每个锚点都是一个独立分支，支持多轮深入讨论。分支之间相互独立，不影响主对话流程。
              </p>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"/>
                    <span className="text-sm text-slate-300">主对话：继续原话题</span>
                  </div>
                  <div className="flex items-center gap-3 ml-6">
                    <GitBranch className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-slate-300">分支：深入细节讨论</span>
                  </div>
                  <div className="flex items-center gap-3 ml-6">
                    <GitBranch className="w-4 h-4 text-pink-400" />
                    <span className="text-sm text-slate-300">另一个分支...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Sync */}
            <div className={`group relative p-8 bg-gradient-to-b from-emerald-500/10 to-teal-500/5 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 delay-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"/>
              <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-emerald-500/30">
                <ArrowLeftRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">同步合并</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                分支讨论完成后，一键同步回主对话。所有洞察和结论无缝整合，保持对话的完整性和连贯性。
              </p>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="flex items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                    分支结论
                  </div>
                  <ArrowLeftRight className="w-6 h-6 text-emerald-400 animate-pulse" />
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-300 rounded-lg text-sm font-medium border border-emerald-500/30">
                    主对话
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Section */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">全平台支持</h2>
            <p className="text-lg text-slate-400">随时随地，无缝切换设备继续对话</p>
          </div>

          <div className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group flex items-center gap-4 p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">桌面端</h4>
                <p className="text-sm text-slate-400">三栏布局，高效操作</p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Tablet className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">平板端</h4>
                <p className="text-sm text-slate-400">自适应布局，触控优化</p>
              </div>
            </div>
            <div className="group flex items-center gap-4 p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">手机端</h4>
                <p className="text-sm text-slate-400">侧边栏收起，专注对话</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative p-12 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl border border-indigo-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"/>
            <Layers className="relative w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-4">准备好体验了吗？</h2>
            <p className="relative text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              配置你的 API 密钥，立即开始使用 ForkForkChat，让 AI 对话像代码一样清晰有条理。
            </p>
            <button
              onClick={onEnterApp}
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl text-lg font-bold hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <MessageSquare className="w-6 h-6" />
              立即开始
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold text-white">ForkForkChat</span>
          </div>
          <p className="text-sm text-slate-500">
            基于 React + TypeScript + Tailwind CSS 构建
          </p>
        </div>
      </footer>
    </div>
  );
};
