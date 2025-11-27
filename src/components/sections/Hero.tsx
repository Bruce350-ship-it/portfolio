import React from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="mb-12 lg:mb-0">
                        <h1 className="text-4xl lg:text-6xl font-bold text-black tracking-tight mb-6">
                            Hi, I'm <span className="text-primary">Bruce</span>.
                            <br />
                            <span className="text-3xl lg:text-5xl text-gray-700 mt-2 block">
                                Software Engineer
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg">
                            Specializing in <span className="font-semibold text-accent">Web Development</span> and <span className="font-semibold text-accent">Data Science</span>.
                            I build scalable applications and derive insights from data.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button href="/web-dev" variant="primary">
                                Web Projects
                            </Button>
                            <Button href="/data-science" variant="secondary">
                                Data Science
                            </Button>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <div className="relative bg-white p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden relative">
                                <Image
                                    src="/assets/Bruce 2.jpeg"
                                    alt="Bruce Bainomugisha"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
