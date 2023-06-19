import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage,ProjectsPage,Register} from './pages';
import LoginPage from './pages/LoginPage/LoginPage';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/signup" element={<Register />} />      
          <Route path="/signin" element={<LoginPage />} />    
        </Routes>
      </div>
    </Router>
  );
};
//<Route path="/projects/create" element={<ProjectsPage />} />
export default App;
