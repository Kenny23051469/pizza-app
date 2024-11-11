import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
import pizzaData from "./data.js";

const CurrentHour = new Date().getHours();
const isOpen = CurrentHour >= 10 && CurrentHour <= 22;

function Header() {
    return (
        <div className="header">
            <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Kenny's Pizza Co.</h1>
        </div>
    )
}

function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            {isOpen && <p>Authentic Italian cuisine, all from our stone oven</p>}
            <div className="pizzas">
                {pizzaData.map(pizza => (
                    <Pizza
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                        photoName={pizza.photoName}
                        isSoldOut={pizza.isSoldOut}
                    />
                ))}
            </div>
        </div>
    )
}

function Order() {
    return (
        <div className="order">
            <footer>We're currently open</footer>
            <button className="btn">Order</button>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <footer>{isOpen ? <Order /> : "Sorry we're closed"}</footer>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <footer>{isOpen ? "We're currently open" : "Sorry we're closed"}</footer>
            <button>{isOpen ? "Order" : }</button>
        </div>
    )
}

function Pizza({ name, ingredients, price, photoName, isSoldOut }) {
    return (
        <div className={`pizza ${isSoldOut ? "sold-out" : ""}`}>
                <img src={photoName} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>{ingredients}</p>
                    <span>$ {price}</span>
                    <button className="btn">Order Now!</button>
                </div>
        </div>
    )
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);