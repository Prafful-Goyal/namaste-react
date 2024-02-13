/**
 *
 *<div id="parent">
     <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h1 tag</h2>
     </div>
     <div id="child2">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h1 tag</h2>
     </div>
  </div>
 *
 *
 *ReactElement(Object) => HTML(Browser Understands)
 *
 *
 */
//NOTE:IF YOU HAVE TO PASS MORE THAN ONE CHILDREN LIKE SIBLING THEN YOU HAVE TO CREATE AN ARRAY OF DIFFERENT CHILDREN
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// ); //IT Just an object(React Element is just an normal javascript object)
console.log(parent); //return an object
const root = ReactDOM.createRoot(document.getElementById("root")); //This is how we create Root inside React(This root is the place where all the react code will run.Everything will be render it will be render inside root )

root.render(parent); //here we passing ReactElement an javascript abject to rendering(This "render " function job is basicallyt to take this object create the h1 tag which browswer understant and put that inside that rootElement or we can say put in the dom )
