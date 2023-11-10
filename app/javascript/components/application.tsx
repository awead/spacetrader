import * as React from "react"
import * as ReactDOM from "react-dom"

import Agent from "./agent"
import Button from "./button"
import SystemMap from "./system_map"

const Ships = () => {
  return (
    <h1>Ships</h1>
  )
}

const Board = () => {
  return (
    <div className="grid">
      <div className="col">
        <div className="p-2 border-white-500 surface-overlay border-3 border-round text-white font-bold">
          <Agent url="http://localhost:3000/agents/me"/>
        </div>
      </div>
      <div className="col">
        <div className="text-center p-3 border-round-sm font-bold">
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
