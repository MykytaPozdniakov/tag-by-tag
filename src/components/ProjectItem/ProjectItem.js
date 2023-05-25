// src/components/ProjectItem/ProjectItem.js
import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-actions">
        {/* Добавьте здесь действия для проекта, если нужно */}
      </div>
    </div>
  );
};

export default ProjectItem;
