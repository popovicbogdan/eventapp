import React from "react";
import Header from "./containers/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./containers/Items/Items";

function App() {
  return (
    <div className="App">
      <Header />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
