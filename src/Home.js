import React from "react";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    //console.log("hello ninja");
  };
  const handleClickAgain = () => {
    // console.log("hello" + name);
    setName("Busolami");
    setAge(21);
  };
  return (
    <div className="Home">
      <h2> HomePage </h2>{" "}
      <p>
        {" "}
        {name} is {age} years old
      </p>{" "}
      <button onClick={handleClick}> Click Me </button>{" "}
      <button onClick={() => handleClickAgain(" Busolami")}>
        {" "}
        Click Me Again{" "}
      </button>{" "}
    </div>
  );
};

export default Home;
