# Build a Website with netninja

## Component

### Basic Knownledge

- JSX has a synax almost identical to html, but they are some differences
- JSX allows us to easily create these html style template and components, and in the bacjground a transpiler called babel convert all of this JSX template into html when we save the file and it renders that html to the dom
- one of the biggest difference betwen JSX and HTML is how we add class, in JSX we use className and it's in camelCase

### Dynamics Values in Templates

- function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com";
  return (
  <div className="App">
  <div className="content">
  <h1> {title} </h1> <p> Liked; {likes} </p>
  <p> {10} </p> <p> {"hello ninjas"} </p> ; <p> {(1, 2, 3, 4, 5)} </p>{" "}
  <p> Math.random() \* 10 </p>{" "}
  <a href={link} Google site>
  {" "}
  </a>{" "}
  </div>{" "}
  </div>
  );
  }
- //to output the variable above, you should make use of {}
- const title = "welcome to a new blog";
- <h1> {title} </h1>{" "}
- N.B booleans and object are the only thing you can't output, Numbers, Strings, Arrays can only be Output in React
- assign outputing the variable we can also write it in a {} that return a Varied value e.g <p> {10} </p>, <p> [1, 2, 3, 4, 5] </p>

### Multiple Component

- App.js is the Root component of the application meaning, the first component that gets renderd to the dom that sit, seat at the very top of our application
- App.js (Root Component), the childrens can be nested in the App.js
- A component is just a function that returns a jsx tempates and it's export at the bottom of the component
- we use a self closely tag as well as open tag but the self closely tag is the best <Selfclosing /> while the open <OpenClosing><OpenClosing>

### Adding Styles

- inline styles <p> style = {{color: "white", backgroundColor: 'black'}}
- dynamic value which an object with key value pass

### Click Events & Functions

- Event is about the different property in the vent if we want to use it
- e.target is basically were the event/ click took place

### Using State and (usestate hook)
