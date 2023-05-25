import React from 'react';
import './MainContent.css'; // Импортируйте ваш файл стилей

const MainContent = ({ children }) => {
  return <div className="main-content">{children}</div>;
};

export default MainContent;
