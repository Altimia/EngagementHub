import React, { useEffect, useState } from 'react';

function SphereOfInfluence() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/spheres')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.staff_name}</h2>
          <p>Contact Name: {item.contact_name}</p>
          <p>Contact Organization: {item.contact_organization}</p>
          <p>Last Contact Date: {item.last_contact_date}</p>
          <p>Notes: {item.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default SphereOfInfluence;
