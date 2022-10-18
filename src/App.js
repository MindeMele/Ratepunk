import { useState } from "react";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Reward from "./components/RewardSection";
import Extension from "./components/ExtensionSection";
import Footer from "./components/Footer";

function App() {
  const [click, setClick] = useState(true);

  const handleClick = (e) => {
    setClick(!click);
  };

  return (
    <div className="app">
      <Navbar click={click} onClick={handleClick} />
      <div className={click ? "sections" : "sections-hide"}>
        <Reward />
        <Extension />
        <Footer />
      </div>
    </div>
  );
}

export default App;
