import React from "react";
import "./contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
    initial={{ x: 800 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
    
    
    className="contact-page">
      <div className="contact-container">
      <div className="contact-content"><h3>Get in touch</h3>

      <ul>
        <li><a href = "mailto: andrewkusakin@me.com">Email</a></li>
        <li><a href = "https://www.instagram.com/andrewkusakin/">Instagram</a></li>
        <li><a href = "https://twitter.com/AndrewKusakin">X/Twitter</a></li>
        
      </ul></div>
      
      </div>
    </motion.div>
  );
}
