import * as ReactDOM from "react-dom"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Image } from 'primereact/image';


import asteroidImage from "../images/asteroid.png";
import gasGiantImage from "../images/gas_giant.png";
import gateImage from "../images/gate.png";
import lunaImage from "../images/luna.png";
import planetImage from "../images/planet.png";
import stationImage from "../images/station.png";

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
    gridColumn: `calc(${x} + 2)`,
    gridRow: `calc(${y} + 2)`
  };

  return (
    <div className="bg-black font-bold" style={sectorStyle}>
      {children}
    </div>
  );
};

const GasGiant = ({}) => {
  return (
    <div style={{ 
      width: "200px",
      height: "200px",
      background: `url(${gasGiantImage})` + "no-repeat center center",
      backgroundSize: "cover",
      position: "relative"
    }}>
    </div>
  )
}

const Planet = ({}) => {
  return (
    <Image src={planetImage} alt="Planet image" width="100" />
  )
}

const Moon = ({}) => {
  return (
    // <div style={{ 
    //   width: "50",
    //   height: "50",
    //   background: `url(${lunaImage})` + "no-repeat center center",
    //   backgroundSize: "cover",
    //   position: "absolute",
    //   top: "20%",
    //   left: "60%"
    // }}>
    // </div>
    <span>moon</span>
  )
}


const Station = ({}) => {
  return (
    <div style={{ 
      width: "50px",
      height: "50px",
      background: `url(${stationImage})` + "no-repeat center center",
      backgroundSize: "cover",
      position: "relative",
      // top: "20%",
      // left: "60%"
    }}>
    </div>
  )
}

const Asteriod = ({}) => {
  return (
    <div style={{ 
      width: "200px",
      height: "200px",
      background: `url(${asteroidImage})` + "no-repeat center center",
      backgroundSize: "cover",
      position: "relative"
    }}>
    </div>
  )
}

const Gate = ({}) => {
  return (
    <div style={{ 
      width: "50px",
      height: "50px",
      background: `url(${gateImage})` + "no-repeat center center",
      backgroundSize: "cover",
      position: "relative"
    }}>
    </div>
  )
}

const Waypoint = ({ symbol, waypointType }) => {
  console.log(waypointType)
  switch(waypointType) {
    case "GAS_GIANT":
      return (
        <GasGiant /> 
      ) 
    case "PLANET":
      return (
        <Planet /> 
      ) 
    case "MOON":
      return (
        <Moon /> 
      ) 
    case "ORBITAL_STATION":
      return (
        <Station /> 
      ) 
    case "ASTEROID_FIELD":
      return (
        <Asteriod /> 
      ) 
    case "JUMP_GATE":
      return (
        <Gate /> 
      ) 
    default:
      return (
        <span>Unknown</span>
      )
  }
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
