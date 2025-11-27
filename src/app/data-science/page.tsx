import React from 'react';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { projects } from '@/lib/data';

export default function DataSciencePage() {
    const dataProjects = projects.filter(p => p.category === 'data-science');

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-black mb-4">Data Science Projects</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Exploratory data analysis, machine learning models, and visualizations that uncover insights from complex datasets.
                    </p>
                </div>

                <ProjectGrid projects={dataProjects} />
            </div>
        </div>
    );
}
