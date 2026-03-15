import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                setLoading(false);
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus(null), 5000);
            },
            (error) => {
                setLoading(false);
                setStatus('error');
                console.error('EmailJS Error:', error);
                setTimeout(() => setStatus(null), 5000);
            }
        );
    };

    return (
        <section id="contact" className="py-20 bg-canvas transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-content">Contact Me</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="flex items-center gap-6 p-6 bg-canvas-alt rounded-2xl border border-border-subtle">
                            <div className="p-4 bg-accent/20 text-accent rounded-full">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-content-muted uppercase">Phone</h3>
                                <p className="text-lg font-bold text-content">+91 9566 084 662</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-canvas-alt rounded-2xl border border-border-subtle">
                            <div className="p-4 bg-purple-500/20 text-purple-500 rounded-full">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-content-muted uppercase">Email</h3>
                                <p className="text-lg font-bold text-content truncate">vigneshjai98@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-content-muted">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full px-6 py-4 bg-canvas-alt border border-border-subtle rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-content"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-content-muted">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full px-6 py-4 bg-canvas-alt border border-border-subtle rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-content"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-content-muted">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full px-6 py-4 bg-canvas-alt border border-border-subtle rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-content resize-none"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-4 bg-accent text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                    <CheckCircle size={20} />
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                    <AlertCircle size={20} />
                                    <span>Something went wrong. Please try again or email me directly.</span>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
