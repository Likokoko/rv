import React from "react";

function User({ user, formatDate }) {
  return (
    <div className="user" key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.first} />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
      <p className="email">{user.email}</p>
      <p className="birthday">Birthday: {formatDate(user.dob.date)}</p>
    </div>
  );
}

export default User;
