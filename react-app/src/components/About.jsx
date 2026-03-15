import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-canvas-alt transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-content">About Me</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative overflow-hidden rounded-full w-64 h-64 md:w-80 md:h-80 border-4 border-canvas shadow-xl">
                                <img
                                    src="/images/vignesh-image-1.jpeg"
                                    alt="Vignesh S"
                                    className="w-full h-full object-cover object-top transform hover:scale-110 transition duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <h3 className="text-3xl font-bold text-content mb-6">
                            Hey There! I'm Vignesh
                        </h3>
                        <p className="text-lg text-content-muted leading-relaxed mb-8">
                            I'm a Front-End Developer with 5 years of experience building scalable and user-friendly web applications using
                            <strong> React.js, Redux, JavaScript, and TypeScript</strong>. I focus on creating seamless interfaces,
                            optimizing performance, and ensuring maintainable, high-quality code.
                        </p>
                        <p className="text-lg text-content-muted leading-relaxed mb-8">
                            Skilled in <strong>RESTful APIs, SQL, and MongoDB</strong>, with hands-on experience in testing using
                            <strong> Jest</strong>. I believe in writing clean, reusable code and collaborating with teams to deliver
                            impactful and efficient software solutions.
                        </p>
                        <a href="#work" className="btn">
                            See More
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
