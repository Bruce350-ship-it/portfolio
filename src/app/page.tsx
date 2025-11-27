import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { projects } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="space-y-12">
      <Hero />
      <ProjectGrid projects={featuredProjects} title="Featured Projects" />
    </div>
  );
}
