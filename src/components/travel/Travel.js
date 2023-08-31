import React, { useState } from "react";
import Gallery from "../gallery/Gallery";
import { imagesTravel } from "../../images"
import { Link, Outlet } from "react-router-dom";

const travelList = [{
  names: "California",
  gallery: imagesTravel,
  coverImg: ""
},
{
  names: "Nevada",
  gallery: imagesTravel,
  coverImg: ""
},
]

export default function Travel() {

  const [imageArray, setImageArray] = useState([]); 

  return (
    <div>
      {travelList.map((i) => (<Link to={`place/${i.names}` }><div onClick={() => setImageArray(i.gallery)}>
        <p>{i.names}</p>
      </div></Link>))}
      <Outlet context={[imageArray, setImageArray]} />
    </div>
  );
}
