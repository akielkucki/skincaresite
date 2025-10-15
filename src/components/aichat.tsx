'use client'
import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import {useStore} from "@/lib/store";


const AiChat = () => {
    const {chatOpen, setChatOpen} = useStore();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: "Hi! I'm your Healora skincare assistant. How can I help you today?",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);

    const quickActions = [
        "Book a consultation",
        "View services",
        "Skin type quiz",
        "Product recommendations"
    ];

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                type: 'user',
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, newMessage]);
            setMessage('');

            // Simulate bot response
            setTimeout(() => {
                const botResponse = {
                    id: messages.length + 2,
                    type: 'bot',
                    text: "Thanks for your message! Our team will assist you shortly. In the meantime, feel free to explore our services or book a consultation.",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, botResponse]);
            }, 1000);
        }
    };

    const handleQuickAction = (action: any) => {
        const newMessage = {
            id: messages.length + 1,
            type: 'user',
            text: action,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMessage]);

        // Simulate bot response based on action
        setTimeout(() => {
            let responseText = "";
            if (action.includes("consultation")) {
                responseText = "Great! I can help you book a consultation. What type of skin concern would you like to address?";
            } else if (action.includes("services")) {
                responseText = "We offer a variety of services including facials, acne treatments, DMK enzyme therapy, and more. Would you like to see our full service menu?";
            } else if (action.includes("quiz")) {
                responseText = "Perfect! Our skin type quiz takes just 30 seconds. Let me direct you there. What's your primary skin concern?";
            } else if (action.includes("recommendations")) {
                responseText = "I'd love to recommend products for you! Tell me about your skin type and main concerns.";
            }

            const botResponse = {
                id: messages.length + 2,
                type: 'bot',
                text: responseText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <>
            {/* Chat Window */}
            {chatOpen && (
                <div className="fixed bottom-32 right-8 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Healora AI Assistant</h3>
                                <p className="text-white/80 text-xs flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    Online now
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setChatOpen(false)}
                            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                                    <div className={`rounded-2xl p-3 ${
                                        msg.type === 'user'
                                            ? 'bg-amber-500 text-white rounded-br-none'
                                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                                    }`}>
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1 px-2">{msg.time}</p>
                                </div>
                            </div>
                        ))}

                        {/* Quick Actions */}
                        {messages.length === 1 && (
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500 px-2">Quick actions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickActions.map((action, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuickAction(action)}
                                            className="bg-white border border-amber-500 text-amber-600 px-3 py-2 rounded-full text-sm hover:bg-amber-50 transition-colors"
                                        >
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t bg-white rounded-b-2xl">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">Powered by Healora AI</p>
                    </div>
                </div>
            )}

            {/* Chat Bubble */}
            <button
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform z-50 group"
            >
                {chatOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <>
                        <MessageCircle className="w-7 h-7" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
                    </>
                )}
            </button>
        </>
    );
};

export default AiChat;