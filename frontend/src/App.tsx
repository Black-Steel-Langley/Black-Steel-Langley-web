import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("sidebar-open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("sidebar-open");
  }
  return (
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <a href="index.html">Black Steel Langley</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
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
                <main>
                    <div className="content">
                        <ul className="products">
                            <li>
                                <div className="product">
                                    <img
                                        className="product-image"
                                        src="images/d1.jpg"
                                        alt="product"
                                    />
                                    <div className="product-name">
                                        <a href="product.html">Wood</a>
                                    </div>
                                    <div className="product-brand">Lumber Guys</div>
                                    <div className="product-price">$452.40</div>
                                    <div className="product-rating">
                                        4.5 Stars (10 review)
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="product">
                                    <img
                                        className="product-image"
                                        src="images/d1.jpg"
                                        alt="product"
                                    />
                                    <div className="product-name">
                                        <a href="product.html">Wood</a>
                                    </div>
                                    <div className="product-brand">Lumber Guys</div>
                                    <div className="product-price">$452.40</div>
                                    <div className="product-rating">
                                        4.5 Stars (10 review)
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="product">
                                    <img
                                        className="product-image"
                                        src="images/d1.jpg"
                                        alt="product"
                                    />
                                    <div className="product-name">
                                        <a href="product.html">Wood</a>
                                    </div>
                                    <div className="product-brand">Lumber Guys</div>
                                    <div className="product-price">$452.40</div>
                                    <div className="product-rating">
                                        4.5 Stars (10 review)
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="product">
                                    <img
                                        className="product-image"
                                        src="images/d1.jpg"
                                        alt="product"
                                    />
                                    <div className="product-name">
                                        <a href="product.html">Wood</a>
                                    </div>
                                    <div className="product-brand">Lumber Guys</div>
                                    <div className="product-price">$452.40</div>
                                    <div className="product-rating">
                                        4.5 Stars (10 review)
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="product">
                                    <img
                                        className="product-image"
                                        src="images/d1.jpg"
                                        alt="product"
                                    />
                                    <div className="product-name">
                                        <a href="product.html">Wood</a>
                                    </div>
                                    <div className="product-brand">Lumber Guys</div>
                                    <div className="product-price">$452.40</div>
                                    <div className="product-rating">
                                        4.5 Stars (10 review)
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
                <footer>&copy; 2023 Black Steel Langley</footer>
            </div>
        </div>
  );
}

export default App;
