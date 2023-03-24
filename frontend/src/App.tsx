import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Pducts from "./Products/Products";
import Products from './Products/Products';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';
import Payment from './Payment/Payment';
import CheckoutSteps from './Payment/CheckoutSteps';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("sidebar-open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("sidebar-open");
  }
  return (
    <Router>
        <div className="grid-container">
            <link rel="stylesheet" href="style.css" />
            <title>Black Steel Langley</title>
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>&#9776;</button>
                        <a href="index.html">Black Steel Langley</a>
                    </div>
                    <div className="header-links">
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/payment">Payment</Link>
                    </div>
                </header>
                <div>
                    <header>Black Steel Langley</header>
                    <aside className="sidebar">
                        <h3>Shopping Categories</h3>
                        <button className="sidebar-close-button" onClick={closeMenu}>
                            x
                        </button>
                        <ul>
                            <li>
                                <a href="index.html">Wood</a>
                            </li>

                            <li>
                                <a href="index.html">Nails</a>
                            </li>
                        </ul>
                    </aside>
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Products/>} />
                            <Route path="orders" element={<Orders />}></Route>
                            <Route path="/order/:id" element={<OrderDetail />}></Route>
                            <Route path="/payment/:id" element={<CheckoutSteps />}></Route>
                            <Route path="/payment" element={<Payment />}></Route>
                            
                        </Routes>
                    </main>
                    <footer>&copy; 2023 Black Steel Langley</footer>
                </div>
            </div>
    </Router>
  );
}

export default App;
