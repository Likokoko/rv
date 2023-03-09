import React, { useState } from "react";
import RandomUser from "./data";
import "./App.css";
const App = () => {
  const [users, setUsers] = useState([]);

  const clearAll = () => {
    setUsers([]);
  };
  const updateUserList = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  return (
    <main>
      <section className="container">
        <h2>10 frens' birthday</h2>
        <RandomUser users={users} updateUserList={updateUserList} />
        <button onClick={clearAll}> reset</button>
      </section>
    </main>
  );
};

export default App;
