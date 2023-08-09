import React from 'react';
import Project from './pages/ProjectData'; // Adjust the import path
import projects from './pages/ProjectData'; // Adjust the import path

const ProjectsPage = () => {
  return (
    <div>
      <h2>{SECTIONS.PROJECTS}</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
