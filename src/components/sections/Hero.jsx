import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [skillText, setSkillText] = React.useState('');
    const skills = ['React Enthusiast', 'UI/UX Designer', 'Creative Developer', 'Tech Explorer'];
    const [skillIndex, setSkillIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [typingSpeed, setTypingSpeed] = React.useState(150);

    React.useEffect(() => {
        const handleTyping = () => {
            const currentSkill = skills[skillIndex];
            if (isDeleting) {
                setSkillText(currentSkill.substring(0, skillText.length - 1));
                setTypingSpeed(50);
            } else {
                setSkillText(currentSkill.substring(0, skillText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && skillText === currentSkill) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && skillText === '') {
                setIsDeleting(false);
                setSkillIndex((prev) => (prev + 1) % skills.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [skillText, isDeleting, skillIndex]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                            Crafting Digital <br />
                            <span className="gradient-text neon-text">Experiences</span> That Inspire
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/70 max-w-2xl mb-10 font-light h-8"
                    >
                        I am a <span className="text-neon-blue font-semibold">{skillText}</span>
                        <span className="animate-pulse ml-1">|</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="cyber-button">
                            VIEW MY WORK
                        </button>
                        <button className="px-8 py-3 rounded-full border border-white/10 glass-card hover:bg-white/5 transition-all text-sm font-semibold tracking-widest uppercase">
                            LET'S TALK
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
