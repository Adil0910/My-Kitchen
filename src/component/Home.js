import React from "react";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";



const foodItems = [
  { id: 1, name: "Paneer Butter Masala", price: "₹250", img: "/image/d2.jpeg", description: "Creamy, buttery paneer magic!" },
  { id: 2, name: "Veg Biryani", price: "₹200", img: "/image/d4.jpeg", description: "Aromatic veggies in every bite!" },
  { id: 3, name: "Chicken Tikka", price: "₹350", img: "/image/tikka.jpeg", description: "Smoky, juicy grilled chicken!" },
  { id: 4, name: "Burger", price: "₹150", img: "/image/chickenburger.jpeg", description: "Juicy patty, fresh delight!" },
  { id: 5, name: "Pizza", price: "₹400", img: "/image/pizza.jpeg", description: "Cheesy slices, loaded toppings!" },
  { id: 6, name: "Pasta", price: "₹300", img: "/image/pasta.jpeg", description: "Creamy Italian goodness!" },
  { id: 7, name: "Chole Bhature", price: "₹180", img: "/image/chhola.jpeg", description: "Spicy chickpeas, fluffy bhature!" },
  { id: 8, name: "Sandwich", price: "₹120", img: "/image/sandwich.jpeg", description: "Crispy, fresh, perfect snack!" },
  { id: 9, name: "Noodles", price: "₹150", img: "/image/noodles.jpeg", description: "Tangy, tasty stir-fried noodles!" },
  { id: 10, name: "Dosa", price: "₹100", img: "/image/dosa.jpeg", description: "Golden crisp with chutney!" }
]

export default function Home() {
  
   const navigate = useNavigate();
  const sliderRef = useRef(null);
  const cursorRef = useRef(null);
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -220, behavior: "smooth" }); // scroll left 1 card
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 220, behavior: "smooth" }); // scroll right 1 card
  };


useEffect(() => {
const cursor = cursorRef.current;
const move = (e) => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
};
window.addEventListener("mousemove", move);
return () => window.removeEventListener("mousemove", move);
}, []);

  return (
    <>
     <div className="custom-cursor" ref={cursorRef}></div>


{/* HERO */}
<section className="hero">
  <video src="/image/vid1.mp4" autoPlay loop muted />
  <div className="overlay"></div>
  <div className="hero-text">
    <h1>Fresh Meals Delivered Hot & Fast</h1>
    <p>Your favourite dishes, delivered with love & speed.</p>
  </div>
</section>
 <div className="product-slider-section" style={{ padding: "50px 40px" }}>
      <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "28px" }}>Our Menu</h2>
        <button 
          onClick={() => navigate("/service")} 
          style={{
            padding: "10px 20px",
            background: "#FF4C4C",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View More
        </button>
      </div>

      <div style={{ position: "relative" }}>
        {/* Prev Button */}
        <button 
          onClick={scrollLeft} 
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
          }}
        >{"<"}</button>

        {/* Slider */}
        <div 
          className="product-slider" 
          ref={sliderRef} 
        
        >
          {foodItems.map(item => (
            <div key={item.id} className="food-card" style={{
              minWidth: "200px",
              flex: "0 0 auto",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              background: "#fff",
              textAlign: "start",
              paddingBottom: "15px"
            }}>
              <img src={item.img} alt={item.name} style={{ width: "100%", height: "250px", objectFit: "cover", borderTopLeftRadius:"12px", borderTopRightRadius:"12px" }} />
              <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>{item.name}</h3>
                <p style={{ color: "#FF4C4C", fontWeight: "600" }}>{item.price}</p>
                <p style={{ fontSize: "16px", marginBottom: "5px" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button 
          onClick={scrollRight} 
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
          }}
        >{">"}</button>
      </div>
    </div>


          {/* ---------- ABOUT2 SECTION ---------- */}
      <div className="about2-section">
        <div className="about2-left">
          <img src="/image/c3.jpeg" alt="chef cooking" />
        </div>
        <div className="about2-right">
          <h2>Why Choose Us?</h2>
          <p>
            Hum best quality food serve karte hain modern cooking techniques aur
            fresh ingredients ke saath. Har weekend special dishes bhi milti hain.
          </p>
          <ul>
            <li>✔ Fresh Ingredients</li>
            <li>✔ Professional Chefs</li>
            <li>✔ 24/7 Food Delivery</li>
            <li>✔ 500+ Happy Customers</li>
          </ul>
          <button className="about-btn">Book a Table</button>
        </div>
      </div>

   

    


      {/* FOOTER SAME AS BEFORE (NO CHANGES) */}
         <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>🍽 MY KITCHEN</h2>
          <p>
            We serve high-quality dishes made with fresh ingredients and authentic flavors.
            Visit us to enjoy a premium dining experience with comfort and taste.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p> Uttar Pardesh, Bihar, India</p>
          <p> +91 8528 6271 04</p>
          <p> support@mykitchen.com</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span><i className="fa-brands fa-whatsapp"></i></span>
            <span><i className="fa-brands fa-instagram"></i></span>
            <span><i className="fa-brands fa-facebook"></i></span>
            <span><i className="fa-brands fa-github"></i></span>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} MY KITCHEN — All Rights Reserved
      </div>
    </footer>
    </>
  );
}
