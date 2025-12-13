import React, { useState, useEffect } from "react";

// 🔥 Hover Image Component (Fade + Zoom)
function HoverImage({ normal, hover }) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        overflow: "hidden",
        borderRadius: "12px",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={normal}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.6s ease",
          opacity: isHover ? 0 : 1,
          transform: isHover ? "scale(1.1)" : "scale(1)",
        }}
        alt="gallery-normal"
      />
      <img
        src={hover}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.6s ease",
          opacity: isHover ? 1 : 0,
          transform: isHover ? "scale(1.1)" : "scale(1)",
        }}
        alt="gallery-hover"
      />
    </div>
  );
}

export default function About() {
  // ⭐ Reviews with images
  const reviews = [
    {
      img: "/image/c3.jpeg",
      stars: "★★★★★",
      text: "Best taste I’ve ever had! The food was fresh, flavorful and served beautifully. Aadil’s Kitchen is now my favorite spot!",
      name: "Rohit Sharma",
      role: "Food Blogger",
    },
    {
      img: "/image/c5.jpeg",
      stars: "★★★★★",
      text: "The biryani and butter chicken were absolutely delicious. It tasted like pure premium restaurant quality!",
      name: "Sana Akhtar",
      role: "Chef & Reviewer",
    },
    {
      img: "/image/c8.jpeg",
      stars: "★★★★★",
      text: "Their hygiene, taste and service are top-class. Highly recommended for every food lover!",
      name: "Adnan Khan",
      role: "Restaurant Critic",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ⭐ Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* MAIN ABOUT SECTION */}
     <div style={styles.container} className="about-main">

        <div style={styles.left}>
          <h1 style={styles.title}>About Our Restaurant</h1>
          <p style={styles.text}>
            Welcome to <strong>MY KITCHEN</strong>, where taste meets hygiene.
            We serve fresh, delicious, and pocket-friendly food made with premium ingredients.
          </p>
          <p style={styles.text}>
            Our mission is to deliver mouth-watering dishes that make your day better.
            From Indian flavors to Chinese treats — we have something for everyone!
          </p>
          <ul style={styles.list}>
            <li>✔ Fresh Quality Ingredients</li>
            <li>✔ Professional Chefs</li>
            <li>✔ Superfast Delivery</li>
            <li>✔ Best Taste Guaranteed</li>
          </ul>
        </div>

       <div style={styles.right} className="about-right">

          <HoverImage normal="/image/c1.jpeg" hover="/image/c2.jpeg" />
          <HoverImage normal="/image/c4.jpeg" hover="/image/c5.jpeg" />
          <HoverImage normal="/image/c3.jpeg" hover="/image/c8.jpeg" />
          <HoverImage normal="/image/c9.jpeg" hover="/image/c1.jpeg" />
          <HoverImage normal="/image/c8.jpeg" hover="/image/c5.jpeg" />
          <HoverImage normal="/image/c6.jpeg" hover="/image/c10.jpeg" />
        </div>
      </div>

      {/* ---------- IMAGE COLLAGE ---------- */}
      <div className="about-wrapper">
        <div className="image-collage">
          {["/image/c1.jpeg","/image/c2.jpeg","/image/c3.jpeg","/image/c4.jpeg","/image/c5.jpeg","/image/c6.jpeg","/image/c7.jpeg","/image/c8.jpeg","/image/c9.jpeg"].map((img, index) => (
            <div key={index} className="collage-item">
              <img src={img} alt="food" />
            </div>
          ))}
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


        {/* ---------- TESTIMONIAL HEADING ---------- */}
        <div className="testimonial-heading">
          <button className="tag-btn">Testimonials</button>
          <h1>Loved by Food Lovers</h1>
          <h2>trusted by hundreds of happy customers</h2>
        </div>

        {/* ---------- TESTIMONIAL SLIDER ---------- */}
        <div className="testimonial-slider" style={{
          maxWidth: "600px",
          margin: "0 auto 50px",
          textAlign: "center",
          position: "relative"
        }}>
          <div style={{
            background: "#fff",
            padding: "30px 25px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: "all 0.8s ease-in-out"
          }}>
            {/* Reviewer Image */}
            <img 
              src={reviews[current].img} 
              alt={reviews[current].name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "4px solid #FF4C4C", // red border
                objectFit: "cover",
                marginBottom: "15px"
              }}
            />
            {/* Stars */}
            <p style={{ fontSize: "20px", color: "#FFD700", marginBottom: "15px" }}>
              {reviews[current].stars}
            </p>
            {/* Text */}
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6", marginBottom: "20px" }}>
              "{reviews[current].text}"
            </p>
            {/* Name & Role */}
            <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "5px" }}>
              {reviews[current].name}
            </h4>
            <span style={{ fontSize: "14px", color: "#888" }}>{reviews[current].role}</span>
          </div>
        </div>
      </div>

    
      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>🍽 MY KITCHEN</h2>
            <p>
              We serve high-quality dishes made with fresh ingredients and authentic flavors.
              Visit us to enjoy a premium dining experience with comfort and taste.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p> Uttar Pardesh, Bihar, India</p>
            <p> +91 8528 6271 04</p>
            <p> support@mykitchen.com</p>
          </div>
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
        <div className="footer-bottom">
          © {new Date().getFullYear()} MY KITCHEN — All Rights Reserved
        </div>
      </footer>
    </>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    padding: "40px",
    gap: "30px",
  },
  left: { padding: "10px" },
  title: { fontSize: "34px", marginBottom: "15px" },
  text: { marginBottom: "12px", lineHeight: "1.6" },
  list: { marginTop: "15px", lineHeight: "1.8", fontSize: "18px" },
  right: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
  },
};
