import React, { useEffect, useState } from 'react';

function VisualizationTool() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/visualizations')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.staff_name}</h2>
          <p>Organization Name: {item.organization_name}</p>
          <p>Relationship Type: {item.relationship_type}</p>
          <p>Relationship Strength: {item.relationship_strength}</p>
        </div>
      ))}
    </div>
  );
}

export default VisualizationTool;
