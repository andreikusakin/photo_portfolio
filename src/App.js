import logo from "./logo.svg";
import "./App.css";

import Menu from "./components/menu/Menu";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const backgroundImages = [{
  url: "https://i.imgur.com/k0Yi5na.jpg",
  alt: "background image"
}]


function App() {

 
//TODO FULLSCREEN BACKGROUND RANDOM IMAGE





  

  return (
    <div className="App">
      {/* <div className="background-fullscreen">{backgroundImages.map((i) => (<img src={i.url} alt={i.alt}/>))}</div> */}
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
