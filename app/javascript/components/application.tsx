import * as React from "react";
import * as ReactDOM from "react-dom";

import Dataset from "./dataset";
import Button from "./button";

const Agent = () => {
  return (
    <Dataset url="http://localhost:3000/agents/me" />
  )
}

const Ships = () => {
  return (
    <Dataset url="http://localhost:3000/systems/headquarters" />
  )
}

const Board = () => {

  return (
    <div>
      <Agent />
      <Ships />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Board />
      <Button />
    </div>
  );
};

export default App;
