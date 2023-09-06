import React from "react";
import "./about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about-page">
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="about-bg"
      ></motion.div>
      <motion.div className="about-section">
        <motion.div
         initial={{ x: "100vw", opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 2 }}

        
        className="about-text">
          <p> Hello! I'm Andrew Kusakin. </p>
          <p>
            Art has held a profound place in my heart for as long as I can
            remember. It's not just something I do, but a way for me to express
            myself. I've always enjoyed capturing moments—whether I'm drawing
            them or snapping photos with my camera. For me, every picture or
            drawing is a way to freeze a special moment in time, and I love
            being able to share those with others. But my creativity doesn't
            stop at visual arts; it also stretches into the world of music and
            technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="about-photo"
        ></motion.div>
      </motion.div>
    </div>
  );
}
