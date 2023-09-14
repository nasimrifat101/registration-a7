/* eslint-disable react/prop-types */
import { FaDollarSign, FaBook } from "react-icons/fa";

const Card = ({ data, handleSelectedCourse }) => {
  let { title, img, about, price, credit } = data;
  return (
    <div className="bg-white rounded-xl m-4 p-4 w-72 space-y-3">
      <img src={img} alt="" />
      <h1 className="text-md font-bold">{title}</h1>
      <p className="text-gray-500 text-sm">{about}</p>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <button className="text-xl">
            {" "}
            <FaDollarSign></FaDollarSign>
          </button>
          <p>
            Price: <span className="font-bold">{price}</span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-xl">
            {" "}
            <FaBook></FaBook>
          </button>
          <p>
            Credit: <span className="font-bold">{credit}</span> hr
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-400 w-80 py-2 rounded-xl text-white hover:bg-green-300 hover:text-black"
          onClick={() => handleSelectedCourse(data)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
