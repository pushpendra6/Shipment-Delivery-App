import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Register from './Components/Register';
import Razorpay from './Components/Razorpay';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/razorpay" element={<Razorpay />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
