import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-canvas/80 backdrop-blur-md py-4 shadow-lg border-b border-border-subtle' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-content">
                    PortFolio<span className="text-accent underline">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-content-muted hover:text-accent font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-canvas-alt transition-colors"
                    >
                        {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-content-muted" />}
                    </button>
                    <a
                        href="/resume/Vignesh_Resume.pdf"
                        download
                        className="px-6 py-2 bg-accent text-white rounded-full font-semibold hover:bg-accent/80 transition-all transform hover:scale-105"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-canvas-alt transition-colors"
                    >
                        {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-content-muted" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-content focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-canvas z-40 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-content hover:text-accent transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume/Vignesh_Sivalingam_FE_2026.pdf"
                        download
                        onClick={() => setIsOpen(false)}
                        className="px-8 py-3 bg-accent text-white rounded-full font-bold shadow-lg hover:bg-accent/90 transition-all"
                    >
                        Download Resume
                    </a>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-8 right-8 text-content"
                    >
                        <X size={32} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
