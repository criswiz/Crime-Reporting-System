import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import NewsFeed from './pages/NewsFeed';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Complaint from './pages/Complaint';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
