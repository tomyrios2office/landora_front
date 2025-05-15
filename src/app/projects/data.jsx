import { useState } from "react";
import { ProjectsList } from "./components/ProjectsList";

function getProjects() {
  return <ProjectsList projects={projects} />;
}
