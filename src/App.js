import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Employee from "./Components/Employee"
import Addemployee from "./Components/Addemployee";
import Editemployee from "./Components/Editemployee"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/employee" element={<Employee />} />
            <Route path="/addemployee" element={<Addemployee />} />
            <Route path="/editemployee/:id" element={<Editemployee />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
