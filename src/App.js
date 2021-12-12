import Header from "./Components/Header";
import Meme from "./Components/Meme";
import "./styles.css";
import "./memesData.js";

function App() {
  return (
    <div className="app--container">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
