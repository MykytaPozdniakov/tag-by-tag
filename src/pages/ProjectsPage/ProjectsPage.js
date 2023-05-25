import React, { useState, useEffect } from 'react';
import { Header, MainContent, Footer, ProjectsList } from '../../components';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProjects = async (page) => {
    // Замените на запрос к серверу, когда API будет доступен
    const response = await fetch(`/api/projects?page=${page}`);
    const data = await response.json();

    setProjects(data.projects);
    setTotalPages(data.totalPages);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchProjects(page);
  };

  useEffect(() => {
    fetchProjects(currentPage);
  }, []);

  return (
    <div className="projects-page">
      <Header />
      <div className="main-section">
        <MainContent>
          <h2>Projects</h2>
          <ProjectsList
            projects={projects}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </MainContent>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
