import './App.css';
import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import {HomePage, ProjectsPage, SignupPage, SigninPage} from './pages';
import {Content} from "antd/es/layout/layout";
import AuthLayout from "./pages/Layout/AuthLayout";
import React from 'react';
import {ConfigProvider, theme} from 'antd';

function Layout() {
  return (
    <div>
      {/* header can be there */}
      <Content>
        <Outlet />
      </Content>
      {/* footer can be there */}
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <ConfigProvider
          theme={{
            token: {
              algorithm: theme.defaultAlgorithm,
            },
          }}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/signin" element={<SigninPage />} />
            </Route>
            <Route path="/admin" element={<AuthLayout />}>
                <Route path="" element={<HomePage />}/>
                <Route path="home" element={<HomePage />}/>
                <Route path="project" element={<ProjectsPage />}/>
            </Route>
          </Routes>
        </ConfigProvider>
      </div>
    </Router>
  );
};
//<Route path="/projects/create" element={<ProjectsPage />} />
export default App;
