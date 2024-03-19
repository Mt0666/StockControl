import './App.css';
import Login from './components/Login';
import Products from './components/Products';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes, Route } from "react-router-dom";
import DecreasingStock from "./components/DecreasingStock"
// npx json-server --watch api/products.json --port 3001 (json server başlat)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProtectedRoute component={Products}/>}/>
        <Route path="login" element={<Login />} />
        <Route path="/decreasingStock" element={<DecreasingStock />} />
        <Route path="*" element={<ProtectedRoute component={Products}/>}/>
      </Routes>
    </div>
  );
}

export default App;
