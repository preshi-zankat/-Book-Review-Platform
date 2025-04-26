// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookListingPage from './pages/BookListingPage';
import BookDetailsPage from './pages/BookDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import BookReviews from './components/BookReviews';
import ReviewSubmissionForm from './components/ReviewSubmissionForm';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookListingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/book/:id/reviews" element={<BookReviews />} />
        <Route path="/book/:id/review" element={<ReviewSubmissionForm />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
