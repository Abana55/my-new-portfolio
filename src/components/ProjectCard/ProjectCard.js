import React from 'react';
import './ProjectCard.scss';

function ProjectCard({ title, description, link, imageUrl }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="card-content">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;