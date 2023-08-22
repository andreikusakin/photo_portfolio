import React from "react";
import Gallery from "../gallery/Gallery";
import { images } from "../../images"

export default function Wedding() {
  return (
    <div>
      <Gallery
      images={images} />
    </div>
  );
}
