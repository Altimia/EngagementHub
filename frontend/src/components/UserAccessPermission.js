import React, { useEffect, useState } from 'react';

function UserAccessPermission() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/permissions')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.user.username}</h2>
          <p>Role: {item.role}</p>
          <p>Permissions: {item.permissions}</p>
        </div>
      ))}
    </div>
  );
}

export default UserAccessPermission;
