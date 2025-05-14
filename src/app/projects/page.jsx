"use client";

import { useState } from "react";
import { ProjectsHeader } from "./components/ProjectsHeader";
import { ProjectsFilter } from "./components/ProjectsFilter";
import { ProjectsList } from "./components/ProjectsList";
import { projectsData } from "./data";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "funding" && project.status === "Financiando") ||
      (statusFilter === "almost" && project.status === "Casi completo") ||
      (statusFilter === "completed" && project.status === "Completado");

    return matchesSearch && matchesStatus;
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (value) => {
    setStatusFilter(value);
  };

  return (
    <div className="min-h-screen bg-background pt-18">
      <div className="container py-10">
        <div className="space-y-6">
          <ProjectsHeader />

          <ProjectsFilter
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
          />

          <ProjectsList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}
