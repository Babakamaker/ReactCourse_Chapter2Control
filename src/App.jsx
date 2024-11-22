/* eslint-disable no-unused-vars */
import React from "react";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";
import { useUsers } from "./hooks/useUsers";
import "./App.css";

const App = () => {
  const { users, isLoading, error, loadUsers, removeUser, filterUsers } =
    useUsers();

  return (
    <div className="App">
      <h2>Users from API:</h2>
      {error && <p className="error">{error}</p>}

      <FilterBox onFilter={filterUsers} />

      <button onClick={loadUsers} disabled={isLoading}>
        {isLoading ? "Fetching users..." : "Fetch Users"}
      </button>

      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <UserList users={users} removeUser={removeUser} />
      )}
    </div>
  );
};

export default App;
