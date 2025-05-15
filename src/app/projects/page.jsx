"use client";

import { useState } from "react";
import { ProjectsHeader } from "./components/ProjectsHeader";
import { ProjectsFilter } from "./components/ProjectsFilter";
import { ProjectsList } from "./components/ProjectsList";
import { useEffect } from "react";

export default function ProjectsPage() {
  // FIND PROJECTS IN DB
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-background pt-18">
      <div className="container py-10">
        <div className="space-y-6">
          <ProjectsHeader />

          <ProjectsFilter />

          <ProjectsList projects={projects} />
        </div>
      </div>
    </div>
  );
}
