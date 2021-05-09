import "./App.css";
import Dictionary from "./Dictionary.js";
import Footer from "./Footer";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header className="Header"/>
        <div >
          <Dictionary defaultTerm="Golf" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

