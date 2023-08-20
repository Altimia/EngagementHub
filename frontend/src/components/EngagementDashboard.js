import React, { useEffect, useState } from 'react';

function EngagementDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/engagements')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.organization_name}</h2>
          <p>Engagement Type: {item.engagement_type}</p>
          <p>Engagement Date: {item.engagement_date}</p>
          <p>Engagement Details: {item.engagement_details}</p>
        </div>
      ))}
    </div>
  );
}

export default EngagementDashboard;
