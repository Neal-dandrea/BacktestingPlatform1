import React from 'react';
import { API } from 'aws-amplify'; 

const apiName = 'apibacktestingAPI';
const path = `/backtesting`;

const fetchData = async (query = null) => {
    setLoading(true);
    setError(null);
    try {
      let responseData;
      if (query) {
        responseData = await API.post(apiName, path, {
          body: { query },
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        responseData = await API.get(apiName, path, {});
      }
      setData(responseData);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

function Backtests() {
    return (
        <h2>View Backtest Results</h2>
    );
}

export default Backtests;
