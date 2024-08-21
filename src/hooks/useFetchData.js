import { useState, useEffect } from 'react';

function useFetchData(url, collectionName) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Ensure collectionName is properly formatted as JSON
      const requestBody = JSON.stringify({ collectionName });

      try {
        const response = await fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: requestBody, 
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const datas = await response.json();
        setData(datas);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    }

    fetchData();
  }, [url, collectionName]); 

  return data;
}

export default useFetchData;
