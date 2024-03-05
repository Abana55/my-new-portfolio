import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.scss';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: '#',
      imageUrl: 'https://example.com/image1.jpg'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: '#',
      imageUrl: 'https://example.com/image2.jpg'
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      link: '#',
      imageUrl: 'https://example.com/image3.jpg'
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
      link: '#',
      imageUrl: 'https://example.com/image4.jpg'
    },
    {
      title: 'Project 5',
      description: 'Description of Project 5',
      link: '#',
      imageUrl: 'https://example.com/image5.jpg'
    },
    {
      title: 'Project 6',
      description: 'Description of Project 6',
      link: '#',
      imageUrl: '../../'
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
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}

export default Projects;