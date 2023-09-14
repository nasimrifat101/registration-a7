/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Card from "../card/Card";
import Bookmarks from "../bookmarks/Bookmarks";

const Cards = ({ handleSelectedCourse }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-9/12">
      {cards.map((data) => (
        <Card
          key={data.id}
          data={data}
          handleSelectedCourse={() => handleSelectedCourse(data)}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
