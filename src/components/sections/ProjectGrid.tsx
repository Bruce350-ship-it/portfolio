import React from 'react';
import { Project } from '@/types';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectGridProps {
    projects: Project[];
    title?: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, title }) => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <h2 className="text-3xl font-bold text-black mb-12 border-l-4 border-accent pl-4">
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} className="flex flex-col h-full group">
                            <div className="relative h-48 bg-gray-200 overflow-hidden">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${project.category === 'web-dev' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                                        }`}>
                                        {project.category === 'web-dev' ? 'Web Dev' : 'Data Science'}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                <Link
                                    href={`/projects/${project.id}`}
                                    className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mt-auto"
                                >
                                    View Project <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
