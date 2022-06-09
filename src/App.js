import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Navbar />
          <Sidebar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<SingleProduct />} />
            <Route exact path="/checkout" element={<PrivateRoute />}>
              <Route exact path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
