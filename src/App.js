import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import Prices from './components/Prices';
import Rates from './pages/Rates';
import Home from './pages/home';
import Stock from './pages/Stock';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;

