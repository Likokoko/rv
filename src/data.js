import React, { useState, useEffect } from 'react';
import User from './user';

function RandomUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        const sortedUsers = data.results.sort((a, b) => {
          const aMonth = new Date(a.dob.date).getMonth();
          const bMonth = new Date(b.dob.date).getMonth();
          return aMonth - bMonth;
        });
        setUsers(sortedUsers);
      })
      .catch((error) => console.log('Error: ' + error));
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <article className="person">
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
            <User key={user.login.uuid} user={user} formatDate={formatDate} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
}

export default RandomUser;
