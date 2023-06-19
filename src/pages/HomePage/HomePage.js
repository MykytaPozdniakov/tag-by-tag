import React from 'react';
import { Footer, Header, MainContent } from '../../components';

import './HomePage.css'; // Импортируйте ваш файл стилей

const HomePage = () => {
  return (
    <div className="homepage">
      <Header links={[]}/>
      <div className="main-section">
      { /*<Sidebar* />*/}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
