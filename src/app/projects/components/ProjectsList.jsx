import { ProjectCard } from "./ProjectCard";

export function ProjectsList({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No se encontraron proyectos.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center place-content-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
