import React, { useEffect, useState } from 'react';
import './components.css';

const Prices = () => {
  const [exchangeRate, setExchangeRate] = useState([]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price');
      const data = await response.json();
      const limitedData = data.slice(0, 100);
      setExchangeRate(limitedData);
    };

    fetchExchangeRate();
  }, []);

  return (
    <div className="exchange-rate-slider">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {exchangeRate.map((item, index) => (
            <div className="ticker-item" key={index}>
              {item.symbol}={item.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
