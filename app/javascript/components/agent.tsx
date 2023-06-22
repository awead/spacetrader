import * as ReactDOM from "react-dom";
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
      <h2>{jsonData.symbol}</h2>
      <p>credits: {jsonData.credits}</p>
      <p>HQ: {jsonData.headquarters}</p>
    </div>
  )
}

export default Agent

