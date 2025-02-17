import React, { useState } from 'react';

function Quantum() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to call the EC2 API directly
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // For production, uncomment:
     const response = await fetch('https://x91quab646.execute-api.us-east-1.amazonaws.com/prod/test');
      
      // For local development:
      //const response = await fetch('http://127.0.0.1:8080/test');

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Quantum Computing Analysis</h2>
      <p className="mb-4">
        In this demonstration, we generate an ad hoc dataset to simulate a quantum machine learning scenario. 
        Our dataset consists of two classes plotted in a 2D space. We would typically train a quantum classifier—such as one based on a variational quantum circuit—to distinguish these classes.
        The generated plot shows both the training and testing data points, along with a background that visualizes the overall dataset.
      </p>

      <button 
        onClick={fetchData} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        disabled={loading}
      >
        {loading ? 'Running Analysis...' : 'Run Quantum Analysis'}
      </button>

      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {data && (
        <div className="mt-8 border p-4">
          <h3 className="text-xl font-bold mb-2">Analysis Details</h3>
          <p className="mb-4">{data.message}</p>
          {data.plot_image && (
            <>
              <h4 className="font-bold mb-2">Visualization:</h4>
              <img 
                src={`data:image/png;base64,${data.plot_image}`} 
                alt="Quantum Plot" 
                style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', marginTop: '1rem' }} 
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Quantum;
