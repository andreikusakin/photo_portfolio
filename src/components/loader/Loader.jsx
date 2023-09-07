import React from "react";
import "./loader.css";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0,
        transitionEnd: {
          display: "none",
        } }}
      transition={{ duration: 0.5, delay: 2 }}
      
      className="loader"
    >
      <span className="line">
        <motion.span
          initial={{ width: 0, x: -280 }}
          animate={{ width: 280, x: 0 }}
          transition={{ duration: 1.5 }}
          className="line-progress"
        ></motion.span>
      </span>
    </motion.div>
  );
}
