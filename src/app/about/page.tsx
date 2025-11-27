import React from 'react';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export default function AboutPage() {
    const webSkills = [
        {
            category: "Frontend",
            items: ["HTML5", "CSS3 (SCSS/SASS, Tailwind, Bootstrap)", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vite", "Redux / Zustand", "AJAX / Fetch / Axios", "Accessibility", "Performance Optimization"]
        },
        {
            category: "Backend",
            items: ["Node.js / Express.js", "Python / FastAPI", "PHP / Laravel", "REST API design", "C++"]
        },
        {
            category: "Databases",
            items: ["SQL (MySQL, PostgreSQL, SQLite)", "ORMs (Prisma, Sequelize)", "NoSQL (MongoDB, Firebase)", "Database design"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS (EC2, Lightsail, S3, Route 53)", "Docker", "CI/CD (GitHub Actions, GitLab CI, Jenkins)", "Nginx / Apache", "Git / GitHub / GitLab"]
        },
        {
            category: "Tools",
            items: ["npm / yarn / pnpm", "Webpack / Vite / Parcel", "Postman / Insomnia", "Jest / RTL / Cypress", "Figma / Adobe XD"]
        }
    ];

    const dataSkills = [
        {
            category: "Programming & Core",
            items: ["Python", "Pandas, NumPy", "Matplotlib / Seaborn / Plotly", "SciPy", "Scikit-learn"]
        },
        {
            category: "Machine Learning / AI",
            items: ["TensorFlow, Keras", "PyTorch", "XGBoost / LightGBM", "Model evaluation", "Feature engineering", "Hyperparameter tuning"]
        },
        {
            category: "Data Handling",
            items: ["Microsoft Excel", "SQL / NoSQL querying", "Data cleaning", "ETL pipelines", "Visualization (PowerBI, Dash, Streamlit)"]
        },
        {
            category: "Big Data / Cloud",
            items: ["Docker", "AWS S3 / EC2 / SageMaker", "Apache Spark", "Hadoop"]
        },
        {
            category: "Tools",
            items: ["Jupyter Notebook / Lab", "VS Code / PyCharm", "Git / GitHub", "Markdown / Confluence"]
        }
    ];

    const extras = [
        "Web security basics (JWT, OAuth2)",
        "Performance optimization",
        "REST API integration",
        "Container orchestration (Kubernetes basics)",
        "Automated testing (unit, integration, e2e)"
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-black mb-8">About Me</h1>

                <div className="prose prose-lg text-gray-600 mb-16">
                    <p className="mb-6">
                        Hello! I'm Bruce Bainomugisha, a passionate Software Engineer with a unique blend of skills in Web Development and Data Science.
                    </p>
                    <p className="mb-6">
                        My journey began with a curiosity for how things work, which led me to explore the world of code. Over the years, I've honed my skills in building robust web applications using modern technologies like React, Next.js, and Node.js.
                    </p>
                    <p className="mb-6">
                        Simultaneously, my interest in data drove me to delve into Data Science. I love uncovering hidden patterns in data and using machine learning to solve complex problems. Whether it's crafting a pixel-perfect UI or training a predictive model, I bring dedication and precision to every project.
                    </p>
                </div>

                {/* Web Development Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-black mb-8 border-l-4 border-accent pl-4">Web Development</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {webSkills.map((group) => (
                            <div key={group.category} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-accent mb-4">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex items-start text-gray-700 text-sm">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Science Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-black mb-8 border-l-4 border-primary pl-4">Data Science / ML</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {dataSkills.map((group) => (
                            <div key={group.category} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-primary mb-4">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex items-start text-gray-700 text-sm">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extras Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-black mb-6">Extras</h2>
                    <div className="bg-beige/30 p-8 rounded-xl">
                        <div className="flex flex-wrap gap-3">
                            {extras.map((item) => (
                                <span key={item} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        variant="primary"
                        className="gap-2"
                        href="/assets/Bruce Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Download size={20} />
                        Download Resume
                    </Button>
                </div>
            </div>
        </div>
    );
}
