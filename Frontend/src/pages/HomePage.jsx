import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import FeaturedBooks from '../components/FeaturedBooks';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-300 text-white text-center p-6">
        <h1 className="text-4xl font-bold">Book Review Platform</h1>
        <p className="text-lg mt-2">Find and review your favorite books</p>
        {/* Add Sign-Up, Login, and Profile buttons */}
        <div className="mt-6">
          <Link
            to="/register"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition mr-4"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition mr-4"
          >
            Login
          </Link>
          <Link
            to="/profile"
            className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition"
          >
            User Profile
          </Link>
          <Link
            to="/books"
            className="bg-orange-600 text-white py-2 ml-2 px-6 rounded-lg hover:bg-blue-700 transition mr-4"
          >
            Book Listings
          </Link>
        </div>
      </header>
      <main className="container mx-auto p-6">
        {/* FeaturedBooks component */}
        <FeaturedBooks />
      </main>
    </div>
  );
};

export default HomePage;
