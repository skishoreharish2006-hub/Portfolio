import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Code, TrendingUp } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const ProjectPanel = ({ skill, onClose }) => {
    const chartData = [
        { name: '2022', val: 40 },
        { name: '2023', val: 65 },
        { name: '2024', val: 85 },
        { name: '2025', val: 95 },
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="absolute top-0 right-0 h-full w-full md:w-[450px] bg-black/40 backdrop-blur-xl border-l border-white/10 p-8 z-50 flex flex-col"
            >
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20"
                            style={{ boxShadow: `0 0 20px ${skill.color}44` }}
                        >
                            <Code size={20} style={{ color: skill.color }} />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-white">{skill.name}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-8">
                    <section>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">Featured Projects</h3>
                        <div className="space-y-6">
                            {skill.projects.map((project, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="group relative p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                                        style={{ background: `linear-gradient(45deg, transparent, ${skill.color})` }}
                                    />
                                    <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <a href="#" className="flex items-center gap-2 text-xs text-neon-blue hover:underline">
                                            <Github size={14} /> GitHub
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-xs text-neon-cyan hover:underline">
                                            <ExternalLink size={14} /> Demo
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">Domain Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Optimization", "Scalability", "Clean Code", "Innovation"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/70">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-bold flex items-center gap-2">
                            <TrendingUp size={14} /> Proficiency Trajectory
                        </h3>
                        <div className="h-32 w-full bg-white/5 border border-white/10 rounded-2xl p-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <Line
                                        type="monotone"
                                        dataKey="val"
                                        stroke={skill.color}
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                    <Tooltip
                                        contentStyle={{ background: '#000', border: 'none', borderRadius: '8px', fontSize: '10px' }}
                                        itemStyle={{ color: skill.color }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </section>
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                    <button
                        onClick={onClose}
                        className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-sm font-semibold transition-all"
                    >
                        Return to Mind Map
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectPanel;
