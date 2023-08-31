import React, { useState, useEffect } from "react";
import Column2 from "../components/Column2";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import RateNav from "../components/RateNav";

const STOCK_URL = "http://127.0.0.1:8000/api/v1/get_stocks?symbol=";

const Stock = () => {
  const [stockPrice, setStockPrice] = useState([]);
  const [input1, setInput1] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stockPrices = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/get_stock_prices"
        );
        const data = await response.json();
        setStockPrice(data);
      } catch (error) {
        console.error("Error fetching stock prices:", error);
      }
    };

    stockPrices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input1) {
      setErrMsg("Please select an option");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.get(`${STOCK_URL}${input1}`);
      if (response.status === 200) {
        setLoading(false);
        setInput1("");
        const stockData = response.data; // Assuming response.data contains the stock data
        Swal.fire({
          title: "Stock Information",
          html: `
            <p>The current cost for ${input1} is $${stockData.c}</p>
            <p>The change is $${stockData.d}</p>
            <p>The change percentage is ${stockData.dp}%</p>
            <p>The High price of the day is $${stockData.h}</p>
            <p>The Low price of the day is $${stockData.l}</p>
            <p>The Open price of the day is $${stockData.o}</p>
            <p>The Previous Close price of the day is $${stockData.pc}</p>
          `,
          icon: "success",
        });
      }
    } catch (error) {
      setLoading(false);
      //   console.error("Error fetching stock data:", error);
      setErrMsg(
        "Our Stock Prices are currently unavailable. Please try again later."
      );
    }
  };

  return (
    <>
      <RateNav />
      <div className="container mt-5">
        <div className="row mx-lg-n5">
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 px-md-5 px-sm-5 pt-5">
            <section>
              <p
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <Column2
                content={
                  <>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <Link to="/rates">
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio1"
                          autoComplete="off"
                        />
                        <label className="btn btn-dark" htmlFor="btnradio1">
                          Cryptocurrency
                        </label>
                      </Link>
                      <Link to="/stock">
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio2"
                          autoComplete="off"
                          disabled
                        />
                        <label className="btn btn-dark" htmlFor="btnradio2">
                          Stock Prices
                        </label>
                      </Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <select
                        className="form-select mt-4"
                        aria-label="Default select example"
                        onChange={(e) => setInput1(e.target.value)}
                      >
                        <option value="">Select option</option>
                        <option value="AAPL">Apple</option>
                        <option value="GOOGL">Google</option>
                        <option value="NFLX">Netflix</option>
                        <option value="META">Meta</option>
                        <option value="AMZN">Amazon</option>
                        <option value="MSFT">Microsoft</option>
                      </select>
                      <button type="submit" className="btn thebutton mt-4">
                        {loading ? "Loading" : "Submit"}
                      </button>
                    </form>
                  </>
                }
              />
            </section>
          </div>
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 px-md-5 px-sm-5 pt-5">
            <Column2 content={<h6>Coming Soon</h6>} />
            {/* <Column2
              content={
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Symbol</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockPrice.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.symbol}</td>
                        <td>${item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;
