import "./App.css";
import Menu from "./components/menu/Menu";
import { Outlet } from "react-router-dom";

const backgroundImages = [
  {
    url: "/images/bg1.jpg",
  },
  {
    url: "/images/bg2.jpg",
  },
  {
    url: "/images/bg3.jpg",
  },
  {
    url: "/images/bg4.jpg",
  },
  {
    url: "/images/bg5.jpg",
  },
  {
    url: "/images/bg6.jpg",
  },
  {
    url: "/images/bg7.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="hero-background"
      style={{
        backgroundImage: `url(${backgroundImages[Math.floor(Math.random() * backgroundImages.length)].url})`,
      }}
      ></div>
      <Outlet />
    </div>
  );
}

export default App;
