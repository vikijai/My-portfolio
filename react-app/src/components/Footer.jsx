import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-canvas-alt border-t border-border-subtle transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-content mb-4">
                    Vignesh <span className="text-accent">S</span>
                </h2>
                <div className="flex justify-center space-x-6 mb-8 text-content-muted">
                    <a href="#home" className="hover:text-accent transition">Home</a>
                    <a href="#about" className="hover:text-accent transition">About</a>
                    <a href="#work" className="hover:text-accent transition">Work</a>
                    <a href="#contact" className="hover:text-accent transition">Contact</a>
                </div>
                <p className="text-content-muted text-sm opacity-60">
                    &copy; {new Date().getFullYear()} Vignesh S. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
