import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatchFound from "./components/NoMatchFound";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatchFound />}></Route>
        <Route path="/product" element={<Product/>}>
          <Route index element={< FeaturedProduct />}></Route>
          <Route path="featured-product" element={<FeaturedProduct />}></Route>
          <Route path="new-product" element={<NewProduct />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
