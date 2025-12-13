import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div class="marquee-container">
        <div class="marquee-text">
          “Order Now & Get Upto 60% OFF on Top Restaurants!”
        </div>
      </div>

      <nav className="navbar">

        {/* Logo */}
        <h2 className="logo">MY KITCHEN</h2>

        {/* Hamburger (mobile only) */}
        <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>

        {/* Links */}
        <div className={`links ${open ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Service">Service</Link>
          <Link to="/Registeration">Log in</Link>


          <Link to="/Cart" style={{ position: "relative" }}>
            Cart
            {cartCount > 0 && (
              <span className="cartss"
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-15px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>

      </nav>
    </>
  );
}
