import React, { useState, useEffect } from 'react';

const Rates = () => {
  const [cryptoRate, setCryptoRate] = useState([]);

  useEffect(() => {
    const fetchCryptoRate = async () => {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price');
      const data = await response.json();
      const limitedData = data.slice(0, 100);
      setCryptoRate(limitedData);
    };

    fetchCryptoRate();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Symbol</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {cryptoRate.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.symbol}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Rates;
