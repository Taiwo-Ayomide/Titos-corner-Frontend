import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Recipe from './pages/Recipe';
import Audio from './pages/Audio';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import PaymentVerify from './pages/VerifyPayment';
import Gallery from './pages/Gallery';

// const PrivateRoute = ({ element, user }) => {
//   return user ? element : <Navigate to="/login" />;
// };

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar /> 
      <div className="cont">
        <div className="leftside">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/verify" element={<PaymentVerify />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/books" element={<Books />} />

            {/* Protected Books route */}
            {/* <Route path="/books" element={<PrivateRoute element={<Books />} user={user} />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
