import React from "react";
import lists from "../../public/lists.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center justify-center items-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Link to='/'>
          <button className="mt-6 text-white bg-pink-500 hover:bg-pink-700 duration-300 rounded-md px-4 py-2">
            Back
          </button>
          </Link>
        </div>

        {/* Mapping list data */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {lists.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
