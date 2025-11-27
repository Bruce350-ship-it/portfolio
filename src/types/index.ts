export interface Project {
    id: string;
    title: string;
    category: 'web-dev' | 'data-science';
    description: string;
    longDescription: string;
    technologies: string[];
    github?: string;
    demo?: string;
    images: string[];
    videos?: string[];
    problems?: string;
    solutions?: string;
    learned?: string;
    featured?: boolean;
}
