import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
      <img
        src={book.coverImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzQQ6S9iyzski8dUSdMqU_Rw749C3gpXoToq4c5u380s-HoqVtMAqLFfbfQQCf5y0T_0&usqp=CAU"}
        alt={book.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-700 mb-2">by {book.author}</p>
      <p className="text-gray-500 text-sm mb-4">{book.description.slice(0, 80)}...</p>
      
      <Link
        to={`/book/${book._id}`} // assuming your backend returns MongoDB-style _id
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
