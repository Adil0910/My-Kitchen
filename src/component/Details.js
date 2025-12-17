import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.menu.find((x) => x.id == id);
        setItem(foundItem);
      });
  }, [id]);

  if (!item) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="conatinerdetail" style={styles.container}>
      <div  style={styles.card} className="cardss" >
               <img src={item.image} alt={item.name} style={styles.image} className="imagess" />


        <div style={styles.info}>
          <h1 style={styles.name}>{item.name}</h1>

          <p style={styles.category}>
            {item.category} • {item.type}
          </p>

          <p style={styles.price}>₹{item.price}</p>

          <p style={styles.desc}>{item.description}</p>

          <button style={styles.btn}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
  },

  card: {
    width:"100%",
    display: "flex",
    gap: "30px",
    background: "rgba(255,255,255,0.7)",
    padding: "25px",
    borderRadius: "20px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  },

  image: {
    width: "350px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "15px",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  name: {
    fontSize: "32px",
    margin: "0",
  },

  category: {
    fontSize: "18px",
    color: "gray",
    margin: "5px 0 10px",
  },

  price: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "green",
  },

  desc: {
    marginTop: "10px",
    lineHeight: "1.5",
    fontSize: "17px",
  },

  btn: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
};
