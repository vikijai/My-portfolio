import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const STORAGE_KEY = 'portfolio-contact-queue';

const getQueuedMessages = () => {
    if (typeof window === 'undefined') {
        return [];
    }

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const saveQueuedMessage = (message) => {
    if (typeof window === 'undefined') {
        return;
    }

    const queue = getQueuedMessages();
    queue.push(message);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
};

const buildFormFromValues = (values) => {
    const form = document.createElement('form');

    Object.entries(values).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.name = name;
        input.value = value;
        form.appendChild(input);
    });

    return form;
};

const isNetworkFailure = (error) => {
    const message = error?.message || '';
    const status = error?.status;

    return !navigator.onLine || status === 0 || message.includes('Failed to fetch') || message.includes('NetworkError') || message.includes('ERR_INTERNET_DISCONNECTED');
};

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | 'queued' | null

    useEffect(() => {
        const sendQueuedMessages = async () => {
            if (typeof window === 'undefined' || !navigator.onLine) {
                return;
            }

            const queue = getQueuedMessages();
            if (!queue.length) {
                return;
            }

            const remaining = [];

            for (const item of queue) {
                try {
                    const form = buildFormFromValues(item.values);
                    await emailjs.sendForm(
                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                        form,
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                    );
                } catch (error) {
                    // set status to queued if any message fails to send, so the user knows some messages are still pending
                    remaining.push(item);
                    console.error('Queued message failed:', error);
                }
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));

            if (!remaining.length) {
                setStatus('success');
                setTimeout(() => setStatus(null), 5000);
            }
        };

        window.addEventListener('online', sendQueuedMessages);
        sendQueuedMessages();

        return () => window.removeEventListener('online', sendQueuedMessages);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = formRef.current;
        if (!form) {
            setLoading(false);
            return;
        }

        const values = Object.fromEntries(new FormData(form).entries());

        if (!navigator.onLine) {
            saveQueuedMessage({ values, createdAt: new Date().toISOString() });
            form.reset();
            setLoading(false);
            setStatus('queued');
            setTimeout(() => setStatus(null), 7000);
            return;
        }

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setLoading(false);
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus(null), 5000);
        } catch (error) {
            if (isNetworkFailure(error)) {
                saveQueuedMessage({ values, createdAt: new Date().toISOString() });
                form.reset();
                setLoading(false);
                setStatus('queued');
                setTimeout(() => setStatus(null), 7000);
                return;
            }

            setLoading(false);
            setStatus('error');
            console.error('EmailJS Error:', error);
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-canvas transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title text-content">Contact Me</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="w-full lg:w-1/3 space-y-8">
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
                    </div>

                    <div className="w-full lg:w-2/3">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="block text-sm font-medium text-content-muted pt-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full px-6 py-4 bg-canvas-alt border border-border-subtle rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-content placeholder:text-content-muted/70"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-medium text-content-muted pt-1">Your Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full px-6 py-4 bg-canvas-alt border border-border-subtle rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-content placeholder:text-content-muted/70"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-content-muted pt-1">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full px-6 py-4 bg-canvas-alt border border-border-subtle rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-content resize-none placeholder:text-content-muted/70"
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

                            {status === 'queued' && (
                                <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                                    <AlertCircle size={20} />
                                    <span>Your message has been saved and will be sent automatically when you're back online.</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                    <AlertCircle size={20} />
                                    <span>Something went wrong. Please try again or email me directly.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
