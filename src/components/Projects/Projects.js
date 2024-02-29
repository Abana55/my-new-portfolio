import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: '#'
    },
    {
        title: 'Project 3',
        description: 'Description of Project 3',
        link: '#'
      },
      {
        title: 'Project 3',
        description: 'Description of Project 3',
        link: '#'
      },
      {
        title: 'Project 3',
        description: 'Description of Project 3',
        link: '#'
      },
      {
        title: 'Project 3',
        description: 'Description of Project 3',
        link: '#'
      },
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;