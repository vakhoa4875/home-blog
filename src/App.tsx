import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import About from './pages/About';
import BlogEditor from './pages/BlogEditor';
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OAuthCallBack from './pages/OAuthCallBack';
import Shop from './pages/Shop';

const App: React.FC = () => {
  return (

    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="editor" element={<BlogEditor />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/oauth/callback" element={<OAuthCallBack />} />
        </Routes>
      </Router>

    </AuthProvider>
  );
};

export default App;