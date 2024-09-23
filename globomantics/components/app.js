"use client";

import { useState } from "react";
import Banner from "./banner";
import React from "react";
import HouseList from "./houseList";
import House from "./house";
import navValues from "../helpers/navValues";

const App = () => {

  const navigationContext = React.createContext(navValues.home);

  // const [selectedHouse, setSelectedHouse] = useState();

  // const setSelectedHouseWrapper = (house) => {
  //   // some validations
  //   setSelectedHouse(house);
  // };

    const [nav, setNav] = useState(navValues.home);

    return (
      <navigationContext.Provider value={nav}>
        <Banner headerText="Providing ..."/> 
        {/* {selectedHouse ? (
            <House house={selectedHouse} />
          )  : ( 
            <HouseList selectHouse={setSelectedHouseWrapper}/>
          )
        } */}
        
      </navigationContext.Provider>  
    );
};

export default App;