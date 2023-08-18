import React, { useEffect, useState } from 'react';

function DatabaseManagementSystem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/dbms')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.organization_name}</h2>
          <p>Contact Person: {item.contact_person}</p>
          <p>Visits: {item.visits}</p>
          <p>MOUs: {item.MOUs}</p>
          <p>Cooperation Type: {item.cooperation_type}</p>
        </div>
      ))}
    </div>
  );
}

export default DatabaseManagementSystem;
