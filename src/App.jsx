import "./App.css";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



function App() {
  const [selectedCourse, SetSelectedCourse] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalPrice, SetTotalPrice] = useState(0);

  const handleSelectedCourse = (course) => {
    if (totalCredits >= 20) {
      toast.error("Credit hours full");
    } else if (selectedCourse.includes(course.title)) {
      toast.warning("You have already selected this course");
    } else {
      SetSelectedCourse([...selectedCourse, course.title]);

      const newTotalCredits = Math.min(totalCredits + course.credit, 20);
      setTotalCredits(newTotalCredits);

      const newTotalPrice = totalPrice + course.price;
      SetTotalPrice(newTotalPrice);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="flex flex-col lg:flex-row mx-6">
        <Cards handleSelectedCourse={handleSelectedCourse}></Cards>
        <Bookmarks
          selectedCourse={selectedCourse}
          totalCredits={totalCredits}
          totalPrice={totalPrice}
        ></Bookmarks>
      </div>
      <ToastContainer /> {}
    </div>
  );
}

export default App;
