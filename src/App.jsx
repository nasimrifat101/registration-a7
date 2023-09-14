import "./App.css";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";

import { useState } from "react";

function App() {
  const [selectedCourse, SetSelectedCourse] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalPrice, SetTotalPrice] = useState(0);

  const handleSelectedCourse = (course) => {
    if (!selectedCourse.includes(course.title)) {
      SetSelectedCourse([...selectedCourse, course.title]);

      const newTotalCredits = Math.min(totalCredits + course.credit, 20);
      setTotalCredits(newTotalCredits);

      const NewTotalPrice = totalPrice + course.price;
      SetTotalPrice(NewTotalPrice);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="flex mx-6">
        <Cards handleSelectedCourse={handleSelectedCourse}></Cards>
        <Bookmarks
          selectedCourse={selectedCourse}
          totalCredits={totalCredits}
          totalPrice={totalPrice}
        ></Bookmarks>
      </div>
    </div>
  );
}

export default App;
