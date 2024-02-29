import React from 'react';
import './ProjectCard.scss'; 
function ProjectCard({ title, description, link }) {
  return (
    <div className="card">
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default ProjectCard;