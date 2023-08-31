import React, { useState, useEffect } from "react";
import Column2 from "../components/Column2";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import RateNav from "../components/RateNav";


const CRYPTO_URL = "https://api.binance.com/api/v3/ticker/price?symbol=";

const Rates = () => {
  const [cryptoRate, setCryptoRate] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCryptoRate = async () => {
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/price"
      );
      const data = await response.json();
      const limitedData = data.slice(0, 10);
      setCryptoRate(limitedData);
    };

    fetchCryptoRate();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [input1, input2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input1 || !input2) {
      setErrMsg("Please select an option");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`${CRYPTO_URL}${input1}${input2}`);
    if (response.status === 200) {
      setLoading(false);
      setInput1("");
      setInput2("");
      Swal.fire(
        "The current cost for " + response.data.symbol + " is $" + response.data.price
      );
    }
  } catch (error) {
    setLoading(false);
    setErrMsg("Something went wrong, please try again.");
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
                      disabled
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
                    />
                    <label className="btn btn-dark" htmlFor="btnradio2">
                      Stock Prices
                    </label>
                    </Link>
                  </div>
                  <select
                    className="form-select mt-4"
                    aria-label="Default select example"
                    onChange={(e) => setInput1(e.target.value)}
                  >
                    <option value="crypto">Select option</option>
                    <option value="BTC">BITCOIN</option>
                    <option value="ETH">ETHEREUM</option>
                    <option value="USDT">USDT</option>
                    <option value="DOGE">DOGECOIN</option>
                    <option value="LTC">LITECOIN</option>
                    <option value="BNB">BINANCE COIN</option>
                    <option value="RUB">RUBLE</option>
                    <option value="SNT">SNT</option>
                    <option value="BCC">BCC</option>
                    <option value="BNT">BNT</option>
                    <option value="NEO">NEO</option>
                    <option value="QTU">QTU</option>
                  </select>
                  <select
                    className="form-select mt-4"
                    aria-label="Default select example"
                    onChange={(e) => setInput2(e.target.value)}
                  >
                    <option value="crypto">Select option</option>
                    <option value="BTC">BITCOIN</option>
                    <option value="ETH">ETHEREUM</option>
                    <option value="USDT">USDT</option>
                    <option value="DOGE">DOGECOIN</option>
                    <option value="LTC">LITECOIN</option>
                    <option value="BNB">BINANCE COIN</option>
                    <option value="RUB">RUBLE</option>
                    <option value="SNT">SNT</option>
                    <option value="BCC">BCC</option>
                    <option value="BNT">BNT</option>
                    <option value="NEO">NEO</option>
                    <option value="QTU">QTU</option>
                  </select>
                  <button type="submit" onClick={handleSubmit} className="btn thebutton mt-4">
                  {loading ? "loading" : "Submit"}
                  </button>
                </>
              }
            />
            </section>
          </div>
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 px-md-5 px-sm-5 pt-5">
            <Column2
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
                    {cryptoRate.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.symbol}</td>
                        <td>${item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rates;
