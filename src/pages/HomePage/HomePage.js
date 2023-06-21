import React from 'react';
import { MainContent } from '../../components';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">

      <div className="main-section">
      { /*<Sidebar* />*/}
        <MainContent />
      </div>
    </div>
  );
};

export default HomePage;
