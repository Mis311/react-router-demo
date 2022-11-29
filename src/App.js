import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatchFound from "./components/NoMatchFound";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Profile from "./components/Profile";
import AuthProvider from "./components/auth";
import Login from   "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    
      <AuthProvider>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<React.Suspense fallback="...loading"><LazyAbout /></React.Suspense>}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatchFound />}></Route>
        <Route path="/product" element={<Product/>}>
          <Route index element={< FeaturedProduct />}></Route>
          <Route path="featured-product" element={<FeaturedProduct />}></Route>
          <Route path="new-product" element={<NewProduct />}></Route>
        </Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userId" element={<UserDetails />}></Route>
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
