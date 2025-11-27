import React from 'react';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ImageGallery } from '@/components/ui/ImageGallery';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map(p => ({ id: p.id }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.category === 'web-dev' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {project.category === 'web-dev' ? 'Web Development' : 'Data Science'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Image Gallery */}
                <div className="mb-12">
                    <ImageGallery images={project.images} projectTitle={project.title} />
                </div>

                {/* Video Section */}
                {project.videos && project.videos.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-black mb-4">Demo Video</h2>
                        <video src={project.videos[0]} controls className="w-full rounded-2xl shadow-lg" />
                    </div>
                )}

                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4">Overview</h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </p>
                        </section>

                        {(project.problems || project.solutions) && (
                            <section>
                                <h2 className="text-2xl font-bold text-black mb-4">Challenges & Solutions</h2>
                                <div className="space-y-6">
                                    {project.problems && (
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                            <h3 className="font-semibold text-red-800 mb-2">The Challenge</h3>
                                            <p className="text-red-700">{project.problems}</p>
                                        </div>
                                    )}
                                    {project.solutions && (
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                            <h3 className="font-semibold text-green-800 mb-2">The Solution</h3>
                                            <p className="text-green-700">{project.solutions}</p>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}

                        {project.learned && (
                            <section>
                                <h2 className="text-2xl font-bold text-black mb-4">What I Learned</h2>
                                <p className="text-gray-700 leading-relaxed">{project.learned}</p>
                            </section>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-black mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {project.github && (
                                <Button href={project.github} variant="outline" className="w-full justify-center gap-2">
                                    <Github size={20} />
                                    View Source
                                </Button>
                            )}
                            {project.demo && (
                                <Button href={project.demo} variant="primary" className="w-full justify-center gap-2">
                                    <ExternalLink size={20} />
                                    Live Demo
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
