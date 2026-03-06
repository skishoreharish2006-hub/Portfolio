import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="section-title">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-white/70 leading-relaxed mb-6">
                            I am a passionate <span className="text-white font-semibold">Creative Developer</span> dedicated to building immersive digital experiences. With a strong foundation in both technical development and design aesthetics, I bridge the gap between imagination and reality.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed mb-8">
                            My journey in tech is driven by a constant desire to push the boundaries of what's possible on the web, focusing on performance, accessibility, and breathtaking visuals.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { count: "25+", label: "Projects Done" },
                                { count: "15+", label: "Tech Mastered" },
                                { count: "10+", label: "Happy Clients" }
                            ].map((stat, i) => (
                                <div key={i} className="glass-card p-6 rounded-2xl text-center">
                                    <div className="text-3xl font-bold text-neon-blue mb-1">{stat.count}</div>
                                    <div className="text-xs text-white/40 uppercase tracking-tighter">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-square max-w-md mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-2xl"></div>
                        <div className="relative h-full w-full glass-card rounded-3xl overflow-hidden animate-float">
                            {/* Placeholder for creative image/element */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-neon-blue opacity-20 text-9xl font-bold">BIO</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
