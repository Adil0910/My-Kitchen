import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
const { cart, changeQty } = useContext(CartContext);


    function pluss(id) {
    changeQty(id, +1);
  }

  function minuss(id) {
    changeQty(id, -1);
  }
  // Total Price
  let total = 0

  for(let item of cart){
    total+=item.price*item.qty;
  }
  return (
    <div style={styles.container} className="cart-container">

      <h1 style={styles.heading}>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Cart is Empty</h2>
      ) : (
        cart.map((item) => (
         <div key={item.id} style={styles.card} className="cart-card">

                  <img src={item.image}  style={styles.image} />



            <div style={styles.info}>
              <h2>{item.name}</h2>
              <p>₹{item.price}</p>
         <p>Quantity: {item.qty}</p>
            <p>{item.description}</p>
            <button style={{paddingBlock:"10px",paddingInline:"16px",background:"orangered",color:"white",border:"none",borderRadius:"8px"}}>Buy Now</button>


              <div style={styles.qtyGlass}>
                <button onClick={() => minuss(item.id)} style={styles.glassBtn}>-</button>
                <button onClick={() => pluss(item.id)} style={styles.glassBtn}>+</button>
              </div>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <h2 style={{ textAlign: "center", marginTop: "20px" }}> Total: ₹{total}</h2>
      )}
    </div>
  );
}

const styles = {
   qtyGlass: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px 14px",
  width:"15%",
  borderRadius: "30px",
  backdropFilter: "blur(10px)",
  background: "rgba(255,255,255,0.3)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
},

glassBtn: {
  border: "none",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
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
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    background: "#fff",
  },
  image: {
    width: "220px",
    height: "220px",
    borderRadius: "8px",
    objectFit: "cover",
    marginRight: "15px",
  },
  info: {
    flex: 1,
  },
  qtyBox: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  btn: {
    padding: "5px 15px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
