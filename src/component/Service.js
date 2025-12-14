import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
export default function Service() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
    const { add } = useContext(CartContext);
    const [qty, setQty] = useState({});
function plus(id){
  setQty(purani =>({...purani,[id]: (purani[id] ||1)+1}))
}
function minus(id){
  setQty(purani =>{
    if(purani[id]>1){
      return {...purani, [id]: purani[id]-1};
    }
    return purani
  })
}

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setItems(data.menu));
  }, []);

  const filteredItems = items.filter((item) => {
    const matchName = item.name.toLowerCase().includes(search.toLowerCase());
    const matchType =
      filterType === "All" ? true : item.type === filterType;
    const matchCategory =
      filterCategory === "All" ? true : item.category === filterCategory;

    return matchName && matchType && matchCategory;
  });

  const categories = ["All", "Indian", "South Indian", "Chinese", "Fast Food", "Drinks", "Dessert"];
  const types = ["All", "Veg", "Non-Veg"];

  return (
    <>
    <div style={styles.container} className="div">
      <h1 style={styles.heading}>🍽 Restaurant Menu</h1>

      {/* Search + Filters */}
     <div style={styles.filters} className="service-filters">


        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={styles.select}
        >
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          style={styles.select}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Menu Grid */}
   <div style={styles.grid} className="service-grid">
        {filteredItems.map((item) => (
         <div key={item.id} style={styles.card} className="service-card">

           <img
  src={item.image}
  style={styles.image}

/>
            <h2 style={styles.name}>{item.name}</h2>
            <p>{item.category} • {item.type}</p>
            <p style={styles.price}>₹{item.price}</p>
            <p>{item.description}</p>
           <div style={styles.qtyGlass} className="qtyGlass">

  <button style={styles.glassBtn} className="btn"
    onClick={()=>minus(item.id)}>-</button>

  <span style={styles.glassQty} >{qty[item.id]||1}</span>

  <button style={styles.glassBtn} className="btn"
    onClick={() =>plus(item.id)}>
    +
  </button>
</div>


       <button className="add" onClick={()=>add({...item,qty: qty[item.id]||1})}>Add to Cart
</button>


                <Link className="viewmore" to={`/details/${item.id}`}>View More</Link>

          </div>
          
        ))}
      </div>
      
    </div>
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


// Inline CSS Styles
const styles = {
  qtyGlass: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px 14px",
  borderRadius: "30px",
  backdropFilter: "blur(10px)",
  background: "rgba(255,255,255,0.3)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
},

glassBtn: {
  border: "none",
  width: "32px",
  display:"flex",
  alignItems:"center",
  height: "32px",
  borderRadius: "50%",
  justifyContent:"center",
  background: "rgba(0,0,0,0.7)",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
},

glassQty: {
  fontSize: "18px",
  fontWeight: "600",
},

  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    paddingBlock:"20px",
    color:"black"
  },
  filters: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  search: {
    padding: "8px",
    width: "200px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "start",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  name: {
    marginTop: "10px",
    fontSize: "18px",
  },
  price: {
    fontWeight: "bold",
    color: "green",
  },
};

