import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: "2024 - Present",
            title: "Senior UI Developer",
            company: "TechNova Solutions",
            desc: "Leading the frontend development of high-performance web applications using React and Next.js."
        },
        {
            year: "2023 - 2024",
            title: "Frontend Developer",
            company: "Creative Pulse Studio",
            desc: "Focused on creating immersive user interfaces and smooth animations for award-winning websites."
        },
        {
            year: "2022 - 2023",
            title: "Junior Web Developer",
            company: "Digital Horizon",
            desc: "Assisted in building responsive websites and implementing interactive UI components."
        }
    ];

    return (
        <section id="experience" className="py-24 relative bg-black/20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">My Journey</h2>
                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-8 group"
                        >
                            <div className="hidden sm:flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-neon-blue group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
                                <div className="w-[2px] h-full bg-white/10 group-last:hidden"></div>
                            </div>
                            <div className="glass-card p-8 rounded-3xl flex-1 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 font-tech text-neon-blue/20 text-4xl font-black">
                                    0{i + 1}
                                </div>
                                <span className="text-neon-blue font-tech text-sm mb-2 block">{exp.year}</span>
                                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                <p className="text-white/40 text-sm mb-4">{exp.company}</p>
                                <p className="text-white/60 leading-relaxed italic">
                                    "{exp.desc}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
