import React, { useState, useEffect } from 'react';
import { Plus, Trash2, MessageSquare, PanelLeftClose, PanelLeft } from 'lucide-react';
import { useConversationStore } from '../stores/conversationStore';
import { formatTime, truncateText } from '../utils/helpers';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const {
    conversations,
    currentConversation,
    createConversation,
    selectConversation,
    deleteConversation,
  } = useConversationStore();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm('确定要删除这个对话吗？')) {
      deleteConversation(id);
    }
  };

  const handleSelectConversation = (id: string) => {
    selectConversation(id);
    if (isMobile) {
      onToggle();
    }
  };

  return (
    <>
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onToggle}
        />
      )}
      
      <aside 
        className={`
          ${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'relative'}
          ${isOpen ? 'w-64' : 'w-0 lg:w-16'}
          bg-gray-50 border-r border-gray-100 flex flex-col h-full
          transition-all duration-300 ease-in-out
          overflow-hidden
        `}
      >
        <div className="flex items-center justify-between p-4">
          {isOpen ? (
            <button
              onClick={createConversation}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">新对话</span>
            </button>
          ) : (
            <button
              onClick={createConversation}
              className="w-full flex items-center justify-center p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
              title="新对话"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>

        {isOpen && (
          <div className="flex-1 overflow-y-auto px-2">
            <div className="space-y-1">
              {conversations.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">暂无对话记录</p>
                </div>
              ) : (
                conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => handleSelectConversation(conversation.id)}
                    className={`group relative p-3 rounded-xl cursor-pointer transition-all ${
                      currentConversation?.id === conversation.id
                        ? 'bg-white shadow-sm border border-gray-200'
                        : 'hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800 truncate">
                          {conversation.title || '新对话'}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatTime(conversation.updatedAt)}
                        </p>
                        {conversation.messages.length > 0 && (
                          <p className="text-xs text-gray-400 mt-1 truncate">
                            {truncateText(
                              conversation.messages[conversation.messages.length - 1].content,
                              40
                            )}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleDelete(e, conversation.id)}
                      className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        <div className={`p-4 border-t border-gray-100 ${isOpen ? '' : 'flex justify-center'}`}>
          <button
            onClick={onToggle}
            className="p-2 text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
            title={isOpen ? '收起侧边栏' : '展开侧边栏'}
          >
            {isOpen ? (
              <PanelLeftClose className="w-5 h-5" />
            ) : (
              <PanelLeft className="w-5 h-5" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
};
