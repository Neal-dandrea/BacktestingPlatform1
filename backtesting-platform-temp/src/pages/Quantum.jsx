import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const apiName = 'apibacktestingAPI'; // same as in your Backtests page
const path = '/quantum';             // or whatever your backend route is

function Quantum() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example fetch function (similar to your Backtests code)
  const fetchQuantumData = async (query = null) => {
    setLoading(true);
    setError(null);

    try {
      let responseData;
      if (query) {
        // If you want to send a POST request with a query body:
        responseData = await API.post(apiName, path, {
          body: { query },
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        // If you just want to do a GET request with no body
        responseData = await API.get(apiName, path, {});
      }
      setData(responseData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // On component mount, fetch quantum data
  useEffect(() => {
    fetchQuantumData();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Quantum computing</h2>

      {/* Simple loading and error states */}
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Display the fetched data */}
      {data && (
        <div>
          <p>API Response:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Quantum;
