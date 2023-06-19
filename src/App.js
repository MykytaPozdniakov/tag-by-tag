import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage,ProjectsPage, SignupPage, SigninPage} from './pages';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/signup" element={<SignupPage />} />      
          <Route path="/signin" element={<SigninPage />} />    
        </Routes>
      </div>
    </Router>
  );
};
//<Route path="/projects/create" element={<ProjectsPage />} />
export default App;
