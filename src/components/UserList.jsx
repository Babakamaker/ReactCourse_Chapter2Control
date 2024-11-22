/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const UserList = ({ users, removeUser }) => {
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <div>
            <h4>
              {user.first_name} {user.last_name}
            </h4>
            <p>Email: {user.email}</p>
          </div>
          <button onClick={() => removeUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
