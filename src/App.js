import React from "react";
import Header from "./containers/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./containers/Items/Items";
import Customizer from "./containers/Customizer/Customizer";

function App() {
  return (
    <div className="App">
      <Customizer />
      <div className="site">
        <Header />
        <Items />
        <Footer />
      </div>
    </div>
  );
}

export default App;
