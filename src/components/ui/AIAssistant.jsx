import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot } from "lucide-react";

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", text: "Hello! I'm Jeshua's neural assistant. How can I help you explore his mind today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { role: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        // Simple bot logic
        setTimeout(() => {
            setMessages([...newMessages, {
                role: "assistant",
                text: "That's a great question! Jeshua is highly skilled in that area. You can see his projects by clicking the neural nodes orbiting the brain."
            }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Orb */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-[2px] z-40 shadow-[0_0_20px_rgba(0,243,255,0.4)]"
            >
                <div className="w-full h-full rounded-full bg-deep-space flex items-center justify-center text-neon-blue">
                    <Bot size={32} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-cyan rounded-full animate-ping" />
            </motion.button>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 100, opacity: 0, scale: 0.9 }}
                        className="fixed bottom-32 right-10 w-[350px] h-[450px] bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl z-50 overflow-hidden flex flex-col shadow-2xl"
                    >
                        <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                                <span className="text-white font-semibold text-sm">Neural AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${m.role === "user"
                                            ? "bg-neon-blue/20 border border-neon-blue/30 text-white"
                                            : "bg-white/5 border border-white/10 text-white/80"
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-neon-blue"
                            />
                            <button
                                onClick={handleSend}
                                className="p-2 bg-neon-blue rounded-xl text-deep-space hover:bg-neon-cyan transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIAssistant;
