import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function Hello({ name }) {
  return (
    <div className="title-card ">
      <h1>Hello {name}</h1>
    </div>
  );
}
const mountNode = document.querySelector("#root");
ReactDOM.render(<Hello name="World!!"></Hello>, mountNode);
