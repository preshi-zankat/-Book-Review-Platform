// src/pages/UserProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await getUserProfile();
        setUser(res.data); // Assuming the response contains the user data
      } catch (err) {
        if (err.message === 'No token found') {
          navigate('/login'); // Redirect to login if no token is found
        } else {
          console.error('Error fetching user profile:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading...</p>;

  if (!user) return <p className="text-center text-red-600 mt-10">Something went wrong, please try again later.</p>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Profile</h2>
        <div className="mb-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Name: </span>
            {user.name}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email: </span>
            {user.email}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate('/edit-profile')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
