import React, { useState, useEffect } from "react";
import "./gallery.css";
import { motion } from "framer-motion";
import { fetchPhotos } from "../../fetchPhotos";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../loader/Loader";

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
  const location = useLocation();
  const { id } = useParams();
  
  const [imageArray, setImageArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [imageStyles, setImageStyles] = useState([]);
  const [shouldRenderLoader, setShouldRenderLoader] = useState(false);

  useEffect(() => {
    setShouldRenderLoader(true)
    const fetchData = async () => {
      const data = await fetchPhotos(location.pathname.substring(1));
      setImageArray(data);
    };

    fetchData().then(() => setTimeout(() => {setShouldRenderLoader(false)}, 2000));
  }, [id]);

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

  const openModalWindow = (imageUrl) => {
    setCurrentImage(imageUrl);
    setShowModal(!showModal);
  }

  const getRandomWidth = () => {
    return 20 + Math.random() * 40 + "vw";
  }

  const getRandomMargin = () => {
    return 5 + Math.random() * 5 + "%";
  }

  return (
    <>
      {shouldRenderLoader && <Loader />}
      <motion.div className="gallery">
        {imageArray.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="photo"
            onClick={() => openModalWindow(image)}
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
        {showModal && (
          <div className="modal-window" onClick={() => setShowModal(false)}>
            <img src={currentImage} alt="Modal Image" />
          </div>
        )}
      </motion.div>
    </>
  );
}
