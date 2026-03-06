import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-2xl ${isScrolled ? 'py-3 glass-morphism' : 'py-5 bg-transparent border-transparent shadow-none'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-white font-tech group">
                    KISHORE<span className="text-neon-blue group-hover:neon-text transition-all">.S</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-xs font-semibold text-white/70 hover:text-white transition-all uppercase tracking-[0.2em] group overflow-hidden"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-white/10">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-neon-blue transition-all hover:scale-110">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-neon-blue transition-all hover:scale-110">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-morphism absolute top-[calc(100%+1rem)] left-0 w-full py-6 flex flex-col items-center space-y-6 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-top-4 overflow-hidden">
                    <div className="absolute inset-0 bg-deep-space/80 backdrop-blur-2xl -z-10"></div>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-white/70 hover:text-neon-blue transition-colors uppercase tracking-[0.2em]"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-6 pt-4 border-t border-white/10 w-full justify-center">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-neon-blue">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-neon-blue">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
