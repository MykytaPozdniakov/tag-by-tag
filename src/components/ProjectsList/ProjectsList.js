// src/components/ProjectsList/ProjectsList.js
import React, { useState, useEffect } from 'react';
import {Pagination,ProjectItem} from './..';

const ProjectsList = ({ projects, onPageChange, currentPage, totalPages }) => {
  return (
    <div>
      <div>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ProjectsList;
