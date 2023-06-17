import * as React from "react";
import * as ReactDOM from "react-dom";

import Agent from "./agent";
import Button from "./button";

const App = () => {
  return (
    <div>
      <h1>JSON Data Example</h1>
      <Agent url="http://localhost:3000/agents/me" />
      <Button />
    </div>
  );
};

export default App;
