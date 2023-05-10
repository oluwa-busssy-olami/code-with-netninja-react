import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log("hello ninja");
  };
  const handleClickAgain = (name) => {
    console.log("hello" + name);
  };
  return (
    <div className="Home">
      <h2> HomePage </h2> <button onClick={handleClick}> Click Me </button>{" "}
      <button onClick={() => handleClickAgain(" Busolami")}>
        {" "}
        Click Me Again{" "}
      </button>{" "}
    </div>
  );
};

export default Home;
