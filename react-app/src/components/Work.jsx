import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Work = () => {
    const projects = [
        {
            title: 'Code Dock',
            image: '/images/work-CD.png',
            link: 'https://1codedock1.netlify.app/',
            github: '#',
        },
        {
            title: 'Code Collab',
            image: '/images/work-CC.png',
            link: 'https://github.com/vikijai/code-collab',
            github: 'https://github.com/vikijai/code-collab',
        },
        {
            title: 'E-Commerce Shop',
            image: '/images/work-EC.png',
            link: 'https://github.com/vikijai/vikz-clothing-shop',
            github: 'https://github.com/vikijai/vikz-clothing-shop',
        },
        {
            title: 'Analytics Dashboard',
            image: '/images/work3.png',
            link: '#',
            github: '#',
        },
    ];

    return (
        <section id="work" className="py-20 bg-canvas-alt transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-content">My Work</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-xl bg-canvas"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition"
                                    >
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/vikijai" target="_blank" rel="noopener noreferrer" className="btn text-lg">
                        See All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Work;
