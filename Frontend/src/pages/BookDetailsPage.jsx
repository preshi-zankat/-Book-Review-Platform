import React, { useEffect, useState } from 'react';
import BookReviews from '../components/BookReviews';
import ReviewSubmissionForm from '../components/ReviewSubmissionForm';
import { useParams } from 'react-router-dom';
import { getBookById, getReviewsByBook } from '../api/bookApi';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch book details and reviews
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookRes = await getBookById(id);
        setBook(bookRes.data);
        fetchReviews(bookRes.data._id); // Fetch reviews for this book after book details are fetched
      } catch (err) {
        console.error('Error loading book details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const fetchReviews = async (bookId) => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      
      if (!token) {
        throw new Error("No token found");
      }
      const res = await getReviewsByBook(bookId, token);
     
      setReviews(res.data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };
  

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600">{book.title}</h2>
      <p className="text-lg text-gray-600 mb-2">by {book.author}</p>
      <div className="flex justify-center mb-4">
        <img
          src={book.coverImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzQQ6S9iyzski8dUSdMqU_Rw749C3gpXoToq4c5u380s-HoqVtMAqLFfbfQQCf5y0T_0&usqp=CAU'}
          alt={book.title}
          className="w-48 h-72 object-cover rounded-md shadow-md"
        />
      </div>
      <p className="text-gray-800 mb-6">{book.description}</p>

      {/* Reviews Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700">Reviews</h3>
        <BookReviews reviews={reviews} />
      </div>

      {/* Review Submission Form */}
      <ReviewSubmissionForm bookId={book._id} onReviewSubmitted={() => fetchReviews(book._id)} />
    </div>
  );
};

export default BookDetailsPage;
