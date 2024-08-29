import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const { userId } = useParams();

  // Fetch user details based on userId or use dummy data
  const userDetails = {
    //id: userId,
    name: 'User1',
    email: 'user1@example.com',
    // Add more details as needed
  };

  return (
    <div className="container mt-5">
      <h2>User Details</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h4 className="card-title">{userDetails.name}</h4>
          <p className="card-text">Email: {userDetails.email}</p>
          {/* Add more details here */}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
