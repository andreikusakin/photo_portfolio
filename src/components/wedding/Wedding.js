import React, { useState } from "react";
import Gallery from "../gallery/Gallery";
import { images } from "../../images";
import { Link, Outlet } from "react-router-dom";
import "./wedding.css";
import Section from "../section/Section";

const weddingList = [
  {
    name: "Jessica & George",
    pathName: "Jessica-George",
    gallery: images,
    coverImg: "https://i.imgur.com/AnIudvv.jpg",
  },
  {
    name: "Valerie & Tom",
    gallery: images,
    coverImg: "https://i.imgur.com/PJBaDHK.jpg",
  },
  {
    name: "Jessica & George",
    gallery: images,
    coverImg: "https://i.imgur.com/AnIudvv.jpg",
  },
  {
    name: "Valerie & Tom",
    gallery: images,
    coverImg: "https://i.imgur.com/PJBaDHK.jpg",
  },
];



export default function Wedding() {
  // const [imageArray, setImageArray] = useState([]);

  return (
    <div className="wedding-section">
      {/* <Outlet context={[imageArray, setImageArray]} /> */}
      <Outlet />
      <Section
        list={weddingList}
        // onClickFunction={(gallery) => setImageArray(gallery)}
      />
      
    </div>
  );
}
