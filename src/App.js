import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '././pages/Home';
import Login from '././pages/Login';
import ProductList from '././pages/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>

          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/products" element={<ProductList />} />
</Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;