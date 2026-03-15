import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-content-muted mb-4">
                            Hello, I'm
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-content">
                            Vignesh <span className="text-accent">S</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-16 mb-8 overflow-hidden"
                    >
                        <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                            Front End Developer
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <a href="#work" className="btn text-lg">
                            See My Work
                        </a>
                        <div className="flex items-center gap-6 text-content-muted">
                            <a href="https://github.com/vikijai" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                <Github size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/vigneshsivalingam/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                <Linkedin size={28} />
                            </a>
                            <a href="https://leetcode.com/u/vigneshjai98/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                <Code2 size={28} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-content-muted opacity-50"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-current rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
