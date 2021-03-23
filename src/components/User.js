import React, { useState, useEffect } from 'react';

const User = (props) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async (id) => {
    const response = await fetch(`/${id}`);
    setUser(await response.json());
  };

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return 'loading...';
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
};

export default User;
