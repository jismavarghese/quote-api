import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavQuote from './NavQuote';

const ViewQuote = () => {
  const [quotes, setQuotes] = useState({ status: 'success', data: [] });

  const fetchData = () => {
    axios.get("https://dummyjson.com/quotes")
      .then((response) => {
        setQuotes({ status: 'success', data: response.data.quotes }); // ✅ Fix here
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavQuote />
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="row g-3">
              <div className="col col-12"></div>
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    
                    <th>ID</th>
                    <th>Quote</th>
                    <th>AUTHOR</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.data.map((value, index) => (
                    <tr key={index}>
                      
                      <td>{value.id}</td>
                      <td>{value.quote}</td>
                      <td>{value.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewQuote;
