import React from "react";
import Cards from "./components/cards/Cards";
import Filter from "./components/filter/Filter";
import Heading from "./components/heading/Heading";
import Navbar1 from "./components/navbar/Navbar";
import Offer from "./components/offer/Offer";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <div className="white1">
      <hr />
      <Offer />
      <br />
      <Heading />
      <Filter />
      <Cards />
      </div>
    </div>
  );
}

export default App;
