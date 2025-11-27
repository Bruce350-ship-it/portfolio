import React from 'react';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { projects } from '@/lib/data';

export default function WebDevPage() {
    const webProjects = projects.filter(p => p.category === 'web-dev');

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-black mb-4">Web Development Projects</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A collection of web applications and sites I've built using modern technologies like React, Next.js, and TailwindCSS.
                    </p>
                </div>

                <ProjectGrid projects={webProjects} />
            </div>
        </div>
    );
}
