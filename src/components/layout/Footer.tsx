import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold">Bruce Bainomugisha</h3>
                        <p className="mt-2 text-white/80">Software Engineer • Web Dev & Data Science</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Bruce350-ship-it" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/bruce-bainomugisha-bab81b197" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:bainbruce399@gmail.com" className="hover:text-accent transition-colors">
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
                    &copy; {new Date().getFullYear()} Bruce Bainomugisha. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
