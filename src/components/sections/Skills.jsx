import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"]
        },
        {
            title: "UI/UX Design",
            skills: ["Figma", "Adobe XD", "Creative Layouts", "Prototyping", "Design Systems"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "Vite", "Three.js", "Framer Motion", "REST APIs"]
        }
    ];

    return (
        <section id="skills" className="py-24 relative bg-black/20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Skills & Mastery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-neon-blue group-hover:neon-text transition-all">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-white/80">{skill}</span>
                                            <span className="text-white/40">Expert</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "90%" }}
                                                transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
