import React from 'react';
import { PageTemplate } from "../components/layout";
import { projectsData } from "../data";

const Projects = () => {
  return <PageTemplate pageName="Projects" items={projectsData} />
};

export default Projects;
