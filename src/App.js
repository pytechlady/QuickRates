import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Prices from './components/Prices';
import Rates from './pages/Rates';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav />
      <Footer />
      <Prices />
        <Routes>
          <Route path="/rates" element={<Rates />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

