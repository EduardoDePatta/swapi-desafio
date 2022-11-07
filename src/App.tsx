import { HashRouter, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import CheckoutResult from './pages/CheckoutResult';

import Home from './pages/Home';

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-result" element={<CheckoutResult />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
