import React from 'react'
import "./gallery.css"


export default function Gallery({ images }) {
    function getRandomWidth() {
        return 15 + Math.random() * 40 + "vw";
      }
    
      function getRandomPadding() {
        return 5 + Math.random() * 5 + "%";
      }


  return (
    <div className="gallery">{images.map((image) => (<img key={image.id}
        src={image.url}
        alt={image.title}
        style={{
          maxWidth: "95vw",
          width: getRandomWidth(),
          
          paddingTop: getRandomPadding(),
          paddingBottom: getRandomPadding(),
          paddingLeft: getRandomPadding(),
          paddingRight: getRandomPadding()
        }}
        />))}</div>

  )
}
