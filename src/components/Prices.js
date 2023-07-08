import React, { useEffect, useState } from 'react';
import './components.css';

const Prices = () => {
  const [exchangeRate, setExchangeRate] = useState([]);
  const [txt, setTxt] = useState([
    {title: "Our rates service is currently unavailable, we will be back soon. Thank you"},
    {message: "We sincerely apologise for any incovenience caused. Please check back later for up-to-date rates."}
  ]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price');
      const data = await response.json();
      const limitedData = data.slice(0, 100);
      setExchangeRate(limitedData);
    };

    fetchExchangeRate();
  }, []);

  return exchangeRate ? (

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
    ) : (
        <div className="exchange-rate-slider">
  <div className="ticker-wrapper">
    <div className="ticker-content2">
      {txt.map((item, index) => (
        <div className="ticker-item" key={index}>
          {item.title}
          {item.message}
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Prices;
