import * as ReactDOM from "react-dom"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const System = ({ children }) => {
  const systemContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "2px"
  };

  return <div style={systemContainerStyle}>{children}</div>;
};

const Region = ({ x, y, children }) => {
  const sectorStyle = {
    backgroundColor: "lightgray",
    padding: "10px",
    gridColumn: `calc(${x} + 2)`,
    gridRow: `calc(${y} + 2)`
  };

  return (
    <div style={sectorStyle}>
      {children}
    </div>
  );
};

const Waypoint = ({ symbol, waypointType }) => {
  return (
    <span>
      {symbol}, {waypointType}
    </span>
  )
}

interface WaypointEntry {
  symbol: string
  waypointType: string
  x: string
  y: string
}

interface RegionMap {
  [id: string]: WaypointEntry[]
}

function tokenizedCoordinate(value: number): string {
  if ( value > 0 ) {
    return "p" + value.toString() 
  }
  else if ( value < 0 ) {
    return value.toString().replace("-", "n")
  }
  else {
    return value
  }
}

const SystemMap = ({ url }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setJsonData(response.data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, [url]);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const waypointEntries: WaypointEntry[] = jsonData.waypoints.map((entry: any) => {
    return {
      symbol: entry.symbol,
      waypointType: entry.type,
      x: entry.x,
      y: entry.y
    }
  })

  const regionMap: RegionMap = waypointEntries.reduce((map: RegionMap, entry: WaypointEntry) => {
    const id = tokenizedCoordinate(entry.x) + tokenizedCoordinate(entry.y)
    if (!map[id]) {
      map[id] = []
    }
    map[id].push(entry)
    return map
  }, {})

  console.log(regionMap)

  const regions = Object.entries(regionMap)

  return (
    <div>
      <System>
        {regions.map(([mapkey, waypoints]) => (
          <Region key={mapkey} x={waypoints[0].x} y={waypoints[0].y}>
            {waypoints.map((waypoint, index) => (
              <Waypoint key={index} symbol={waypoint.symbol} waypointType={waypoint.waypointType} />
            ))}
          </Region>
        ))}
      </System>
    </div>
  )
}

export default SystemMap
