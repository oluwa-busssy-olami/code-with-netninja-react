//import React from "react";
import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  //key attribute should be added to the root the help the react js keep tracks and distinguish the item in the dom
  return (
    <div className="home">
      {" "}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title} </h2> <p> Written by {blog.author} </p>{" "}
        </div>
      ))}{" "}
    </div>
  );
};
export default Home;
