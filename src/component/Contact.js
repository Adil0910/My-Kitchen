import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from 'lucide-react';



export default function Contact() {
  return (
    <section className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-title"
      >
        Get In Touch With Us
      </motion.h2>

      <div className="contact-container">
        
        {/* LEFT CONTACT INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Contact Information</h3>
          <p>Have any questions? We’d love to hear from you.</p>

          <div className="info-item">
            <Mail className="icon" />
            <span>support@mykitchen.com</span>
          </div>

          <div className="info-item">
            <Phone className="icon" />
            <span>+91 85286 271 04</span>
          </div>

          <div className="info-item">
            <MapPin className="icon" />
            <span>Gourmet Street, Delhi, India</span>
          </div>

          <motion.img
            src="/image/c3.jpeg"
            alt="chef"
            className="contact-img"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Send Us a Message</h3>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </motion.form>

      </div>
    </section>
    
  );
}
