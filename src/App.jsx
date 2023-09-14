import "./App.css";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";

import { useState } from "react";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="flex mx-6">
      <Cards></Cards>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
