import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
    const socials = [
        { icon: <Github size={20} />, link: "#", color: "#ffffff" },
        { icon: <Linkedin size={20} />, link: "#", color: "#0077b5" },
        { icon: <Twitter size={20} />, link: "#", color: "#1da1f2" },
        { icon: <Mail size={20} />, link: "#", color: "#ea4335" },
    ];

    return (
        <footer className="py-12 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 to-transparent pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <a href="#home" className="text-2xl font-bold tracking-tighter text-white font-tech mb-2">
                        KISHORE<span className="text-neon-blue">.S</span>
                    </a>
                    <p className="text-white/40 text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} • Crafting the Future
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.link}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-3 glass-card rounded-full text-white/50 hover:text-white transition-all overflow-hidden group relative"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                                style={{ backgroundColor: social.color }}
                            />
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="p-4 glass-card rounded-2xl text-white/40 hover:text-neon-blue transition-all uppercase text-[10px] tracking-[0.2em] font-bold"
                >
                    Back to Top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
