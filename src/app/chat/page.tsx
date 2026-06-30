"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Halo! Saya Punokawan AI. Ada yang bisa saya bantu hari ini?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Ini adalah versi demo. Fitur chat yang sebenarnya akan ditenagai oleh model AI yang dapat dipilih (GPT-4o, Claude, dll)." 
      }]);
    }, 1000);
  };

  return (
    <main className="min-h-screen pt-20 pb-0 flex flex-col relative overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-grow flex flex-col max-w-4xl mx-auto w-full p-4 md:p-6 h-[calc(100vh-80px)]">
        
        {/* Header Chat */}
        <div className="flex items-center gap-3 mb-6 p-4 glass rounded-2xl">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles size={20} className="text-primary" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Punokawan AI</h1>
            <p className="text-xs text-white/50">Model: GPT-4o (Default)</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow overflow-y-auto flex flex-col gap-4 mb-4 scroll-smooth pb-20">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 max-w-[85%] ${msg.role === "user" ? "self-end flex-row-reverse" : "self-start"}`}
              >
                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center mt-1 ${
                  msg.role === "user" ? "bg-white/10" : "bg-primary/20 text-primary"
                }`}>
                  {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-primary text-white rounded-tr-sm" 
                    : "glass rounded-tl-sm text-white/90"
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-6 left-4 right-4 md:left-auto md:right-auto md:w-full md:max-w-4xl">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya apa saja kepada Punokawan..."
              className="w-full bg-surface-2 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-xl"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 top-2 bottom-2 w-10 bg-primary hover:bg-purple-400 disabled:bg-white/5 disabled:text-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Send size={16} className={input.trim() ? "translate-x-[-2px]" : ""} />
            </button>
          </form>
          <div className="text-center mt-3">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">AI dapat membuat kesalahan. Harap periksa kembali info penting.</p>
          </div>
        </div>

      </div>
    </main>
  );
}
