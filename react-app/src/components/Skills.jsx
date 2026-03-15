import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiHtml5,
    SiTypescript,
    SiRedux,
    SiReact,
    SiMysql,
    SiJenkins
} from 'react-icons/si';
import { FaCss3Alt, FaCloud, FaShieldAlt, FaLink } from 'react-icons/fa';

const Skills = () => {
    const skillLines = [
        [
            { name: 'Javascript', Icon: SiJavascript, percentage: 90, color: 'text-yellow-400' },
            { name: 'HTML', Icon: SiHtml5, percentage: 95, color: 'text-orange-500' },
            { name: 'CSS', Icon: FaCss3Alt, percentage: 90, color: 'text-blue-500' },
            { name: 'TypeScript', Icon: SiTypescript, percentage: 85, color: 'text-blue-600' },
        ],
        [
            { name: 'Redux', Icon: SiRedux, percentage: 80, color: 'text-purple-500' },
            { name: 'React Toolkit', Icon: SiReact, percentage: 85, color: 'text-cyan-400' },
            { name: 'SonarQube', Icon: FaShieldAlt, percentage: 75, color: 'text-emerald-500' },
        ],
        [
            { name: 'Azure', Icon: FaCloud, percentage: 70, color: 'text-blue-400' },
            { name: 'MySQL', Icon: SiMysql, percentage: 80, color: 'text-blue-500' },
            { name: 'Jenkins', Icon: SiJenkins, percentage: 75, color: 'text-red-500' },
            { name: 'REST API', Icon: FaLink, percentage: 90, color: 'text-orange-600' },
        ]
    ];

    return (
        <section id="skills" className="py-24 bg-canvas transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="section-title text-content">Technical Expertise</h2>
                    <p className="mt-4 text-content-muted max-w-2xl mx-auto italic">
                        Hover over each technology to see my proficiency level.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                    {skillLines.map((line, lineIdx) => (
                        <div key={lineIdx} className="flex flex-wrap justify-center gap-6 md:gap-14">
                            {line.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (lineIdx * 4 + index) * 0.05 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative"
                                >
                                    <div className="w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center p-4 rounded-2xl bg-canvas-alt border border-border-subtle shadow-sm transition-all duration-300 group-hover:border-accent/10 group-hover:shadow-2xl overflow-hidden">

                                        {/* Icon */}
                                        <skill.Icon className={`text-4xl md:text-6xl mb-2 transition-all duration-500 group-hover:scale-75 group-hover:blur-sm group-hover:opacity-10 ${skill.color}`} />

                                        {/* Skill Label (Hides on hover) */}
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-content-muted group-hover:opacity-0 transition-opacity text-center">
                                            {skill.name}
                                        </span>

                                        {/* Percentage Hover Card */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-content">
                                            <span className="text-2xl md:text-4xl font-black text-accent">{skill.percentage}%</span>
                                            <span className="text-[9px] uppercase font-bold text-content-muted tracking-tighter">Strong</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
