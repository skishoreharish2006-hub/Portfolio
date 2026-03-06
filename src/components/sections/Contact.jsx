import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Get In Touch</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6">Let's build something <span className="gradient-text">extraordinary</span>.</h3>
                        <p className="text-white/60 mb-12 text-lg">
                            Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you as soon as possible!
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail className="text-neon-blue" />, label: "Email", value: "hello@kishore.dev" },
                                { icon: <MapPin className="text-neon-blue" />, label: "Location", value: "Cyber City, India" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="p-4 glass-card rounded-2xl group-hover:neon-border transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/30 uppercase tracking-widest mb-1">{item.label}</div>
                                        <div className="text-lg font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-[2rem] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Send size={150} />
                        </div>
                        <form className="space-y-6 relative z-10">
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Neon Musk"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="neon@future.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your vision..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button className="cyber-button w-full py-5 rounded-xl flex items-center justify-center gap-3">
                                SEND TRANSMISSION <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
