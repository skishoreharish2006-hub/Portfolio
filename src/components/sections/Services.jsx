import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Terminal, Zap } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Layout className="text-neon-blue" size={32} />,
            title: "Web Development",
            desc: "Building high-performance, responsive websites using the latest modern frameworks."
        },
        {
            icon: <Palette className="text-neon-purple" size={32} />,
            title: "UI/UX Design",
            desc: "Creating visually stunning and highly intuitive user interfaces with a focus on UX."
        },
        {
            icon: <Terminal className="text-neon-cyan" size={32} />,
            title: "Product Strategy",
            desc: "Defining the roadmap and technical architecture for successful digital products."
        },
        {
            icon: <Zap className="text-neon-pink" size={32} />,
            title: "Optimization",
            desc: "Pushing the limits of web performance and ensuring lightning-fast load times."
        }
    ];

    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-right after:left-auto after:right-0">Avenue of Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl hover:border-neon-blue/50 transition-all group"
                        >
                            <div className="mb-6 p-4 glass-morphism rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
