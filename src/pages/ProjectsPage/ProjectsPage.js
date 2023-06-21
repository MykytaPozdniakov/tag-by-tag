import React, { useState, useEffect } from 'react';
import { MainContent, Footer, Search, Filter, PaginationComponent, ProjectList } from '../../components';
import './ProjectsPage.css'; // Импортируйте ваш файл стилей

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProjects(data.projects))
      .catch(error => console.log('Fetch error: ', error));
  }, []); // Empty dependency array

  // TODO: Implement logic to filter and search projects

  return (
    <div>
      <div>
        <MainContent>
          <div className="search-filter-container">
            <Filter className="filter" value={filter} onChange={setFilter} />
            <Search className="search" value={searchQuery} onChange={setSearchQuery} />
          </div>
          <ProjectList className="project-list" projects={projects} />
          <PaginationComponent className="pagination" count={10} page={page} onChange={setPage} />
        </MainContent>
      </div>
    </div>
  );
};

export default ProjectsPage;
