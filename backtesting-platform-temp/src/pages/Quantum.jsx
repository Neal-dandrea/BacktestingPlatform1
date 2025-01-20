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
            const response = await fetch('http://54.86.0.12:8080/test');

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
            <h2 className="text-2xl font-bold mb-4">Quantum Computing</h2>

            <button 
                onClick={fetchData} 
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                disabled={loading}
            >
                {loading ? 'Fetching...' : 'Fetch Quantum Data'}
            </button>

            {loading && <p>Loading data...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {data && (
                <div className="border p-4 mt-4">
                    <h3 className="font-bold mb-2">Response:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Quantum;
