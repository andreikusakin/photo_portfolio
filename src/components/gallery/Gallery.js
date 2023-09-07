import React, { useState, useEffect, useRef } from "react";
import "./gallery.css";
import { motion } from "framer-motion";
import { fetchPhotos } from "../../fetchPhotos";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const imageAnimation = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

export default function Gallery() {
  let location = useLocation();
  const [imageArray, setImageArray] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPhotos(location.pathname.substring(1));
      setImageArray(data);
    };

    fetchData().catch(console.error);
  }, [id]);

  const ref = useRef(null);

  function getRandomWidth() {
    return 20 + Math.random() * 40 + "vw";
  }

  function getRandomMargin() {
    return 5 + Math.random() * 5 + "%";
  }

  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [imageStyles, setImageStyles] = useState([]);

  useEffect(() => {
    if (window.innerWidth > 600) {
      const styles = imageArray.map(() => ({
        width: getRandomWidth(),
        marginTop: getRandomMargin(),
        marginBottom: getRandomMargin(),
        marginLeft: getRandomMargin(),
        marginRight: getRandomMargin(),
      }));
      setImageStyles(styles);
    }
  }, [imageArray]);

  function ModalWindow(imageUrl) {
    setCurrentImage(imageUrl);
    setShowModal(!showModal);
  }

  const [shouldRenderLoader, setShouldRenderLoader] = useState(true);

  useEffect(() => {
    setShouldRenderLoader(false);
    setTimeout(() => {
      setShouldRenderLoader(true);
    }, 0);
  }, [id]);

  return (
    <>
      {shouldRenderLoader && <Loader />}
      <motion.div className="gallery">
        {imageArray.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="photo"
            onClick={() => ModalWindow(image)}
            style={{
              maxWidth: "95vw",
              ...imageStyles[index],
            }}
            variants={imageAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          />
        ))}
        {showModal ? (
          <div className="modal-window" onClick={() => setShowModal(false)}>
            <img src={currentImage} alt="Modal Image" />
          </div>
        ) : null}
      </motion.div>
    </>
  );
}
