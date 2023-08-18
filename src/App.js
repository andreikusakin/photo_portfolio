import logo from "./logo.svg";
import "./App.css";
import { images } from "./images";
import Menu from "./components/menu/Menu";



function App() {

  function getRandomWidth() {
    return 15 + Math.random() * 40 + "vw";
  }

  function getRandomPadding() {
    return 5 + Math.random() * 5 + "%";
  }


  

  return (
    <div className="App">
      <Menu />
      
      <div className="gallery-row">{images.map((image) => (<img key={image.id}
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
    </div>
  );
}

export default App;
