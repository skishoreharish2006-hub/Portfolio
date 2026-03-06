import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="glass-card group rounded-3xl overflow-hidden"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-neon-blue hover:scale-110 transition-all">
                        <Github size={18} />
                    </button>
                    <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-neon-blue hover:scale-110 transition-all">
                        <ExternalLink size={18} />
                    </button>
                </div>
            </div>
            <div className="p-8">
                <div className="flex gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/40 uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {project.desc}
                </p>
                <button className="text-neon-blue text-xs font-bold tracking-widest uppercase hover:neon-text transition-all">
                    Learn More →
                </button>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Futuristic Dash",
            desc: "A cyber-themed administration panel with real-time data.",
            tags: ["React", "Three.js", "GSAP"],
            image: "https://images.unsplash.com/photo-1635837858342-43cedec8ea05?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Quantum Portal",
            desc: "Experimental landing page with gravity-defying animations.",
            tags: ["Vite", "Framer", "CSS3"],
            image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Neon Nexus",
            desc: "Social network for developers with a dark mode aesthetic.",
            tags: ["Next.js", "Tailwind", "Firebase"],
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Selected Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
