import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Mobiles from './Pages/Mobiles';
import Cars from './Pages/Cars';
import Footer from './Pages/Footer';
import Login from './Pages/Login';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <main>{children}</main>
      {!isLoginPage && <Footer />}
    </>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Home />
      {isHomePage && (
        <>
          <Mobiles />
          <Cars />
        </>
      )}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}
