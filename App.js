const parent = React.createElement("div",{id:'parent'},React.createElement("div",{id:'child'},[React.createElement("h1",{},"rajith react"),React.createElement("h2",{},"rajith js")]))



const heading = React.createElement("h1",{id:'colour'},"Hello World! from React");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);