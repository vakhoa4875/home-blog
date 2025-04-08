import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import LoginCard from './modules/auth/components/Login';
import About from './pages/About';
import BlogEditor from './pages/BlogEditor';
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';

const App: React.FC = () => {
  return (

    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="about" element={<About />} />
              <Route path="shop" element={<Shop />} />
              <Route path="editor" element={<BlogEditor />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
          <Route path="login" element={<LoginCard />} />
        </Routes>
      </Router>

    </AuthProvider>
  );
};

export default App;