import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

interface KolassitChatProps {
    isOpen: boolean;
    onClose: () => void;
}

const KolassitChat: React.FC<KolassitChatProps> = ({ isOpen, onClose }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
        {
            role: 'assistant',
            content: "Hi! I'm KolAssit, your AI shopping assistant for medical supplies. How can I help you today?"
        }
    ]);

    const handleSend = () => {
        if (!message.trim()) return;

        setMessages([...messages, { role: 'user', content: message }]);
        setMessage('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm here to help you find the right medical products. You can ask me about product recommendations, specifications, or anything else related to medical supplies!"
            }]);
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)]">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0071ce] to-[#0047D1] text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        <div>
                            <div className="font-bold">KolAssit</div>
                            <div className="text-xs opacity-90">AI Shopping Assistant</div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg p-3 ${msg.role === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-white border border-gray-200'
                                    }`}
                            >
                                {msg.role === 'assistant' && (
                                    <div className="flex items-center gap-2 mb-1">
                                        <Sparkles className="h-4 w-4 text-primary" />
                                        <span className="text-xs font-medium text-primary">KolAssit</span>
                                    </div>
                                )}
                                <p className="text-sm">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t bg-white">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask KolAssit anything..."
                            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        />
                        <button
                            onClick={handleSend}
                            className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                        >
                            <Send className="h-5 w-5" />
                        </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                        Powered by Kolabo Tech • Always here to help
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KolassitChat;
