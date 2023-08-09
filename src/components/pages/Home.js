import React from 'react';
import Project from '../components/Project';
import projects from '../pages/ProjectData';

const Home = () => {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
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

export default Home;
