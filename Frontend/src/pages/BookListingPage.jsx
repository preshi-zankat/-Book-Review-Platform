// src/pages/BookListingPage.jsx
import React, { useState, useEffect } from 'react';
import BookSearch from '../components/BookSearch';
import BookFilter from '../components/BookFilter';
import BookList from '../components/BookList';
import { getBooks } from '../api/bookApi'; // assuming your file is named bookApi.js

const BookListingPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filters, setFilters] = useState({
    genre: '',
    rating: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const genres = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery'];
  const ratings = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks();
        setBooks(res.data);
        setFilteredBooks(res.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let updatedBooks = [...books];

    if (filters.genre) {
      updatedBooks = updatedBooks.filter(book => book.genre === filters.genre);
    }

    if (filters.rating) {
      updatedBooks = updatedBooks.filter(book => Math.floor(book.rating) >= filters.rating);
    }

    if (searchTerm) {
      updatedBooks = updatedBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(updatedBooks);
  }, [books, filters, searchTerm]);

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center p-6">
        <h1 className="text-4xl font-bold">Book Store</h1>
        <p className="text-lg mt-2">Find your next favorite book</p>
      </header>

      <main className="container mx-auto p-6">
        <BookSearch onSearch={handleSearch} />
        <BookFilter genres={genres} ratings={ratings} onFilterChange={handleFilterChange} />
        <BookList books={filteredBooks} filters={filters} />
      </main>
    </div>
  );
};

export default BookListingPage;
