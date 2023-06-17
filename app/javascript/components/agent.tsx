import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Agent = ({ url }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setJsonData(response.data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, [url]);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the JSON data */}
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default Agent;

