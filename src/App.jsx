import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componenets/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import BookingPage from './pages/BookingPage';
import BookingHistory from './pages/BookingHistory';
import Login from './Componenets/login';
import Signup from './Componenets/Signup';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
