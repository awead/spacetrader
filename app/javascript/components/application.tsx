import * as React from "react"
import * as ReactDOM from "react-dom"

import Dataset from "./dataset"
import Button from "./button"
import SystemMap from "./system_map"

const Agent = () => {
  return (
    <Dataset url="http://localhost:3000/agents/me" />
  )
}

const Ships = () => {
  return (
    <h1>Ships</h1>
  )
}

const Board = () => {
  return (
    <div className="grid">
      <div className="col">
        <div className="text-center p-3 border-round-sm bg-primary font-bold">
          <Agent />
        </div>
      </div>
      <div className="col">
        <div className="text-center p-3 border-round-sm bg-primary font-bold">
          <SystemMap url="http://localhost:3000/systems/headquarters" />
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Board />
      <Button />
    </div>
  )
}

export default App
