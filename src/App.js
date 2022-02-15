import React from "react";
import "./app.css";
import Header from "./components/Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Punklist from "./components/Punklist";
import SinglePunk from "./components/SinglePunk";

const App = () => {
  const [punkListsDatas, setPunkListsDatas] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [toggleSwitchItem, setToggleSwitchItem] = useState(false);

  const handleToggleSwitchItem = () => {
    setToggleSwitchItem((prevState) => !prevState);
  };

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios({
        method: "get",
        url: "https://testnets-api.opensea.io/assets?asset_contract_address=0x46Da63E2fb6c5d7e3A3e309c512D87929B8b130F&order_direction=asc",
        
      });
      setPunkListsDatas(openSeaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div
      className="app"
      style={{
        background: toggleSwitchItem ? "#f4f4f4" : "#000",
      }}
    >
      <Header
        handleToggleSwitchItem={handleToggleSwitchItem}
        toggleSwitchItem={toggleSwitchItem}
      />
      {punkListsDatas.length > 0 && (
        <>
          <SinglePunk
            selectedPunk={selectedPunk}
            punkListsDatas={punkListsDatas}
            toggleSwitchItem={toggleSwitchItem}
          />
          <Punklist
            punkListsDatas={punkListsDatas}
            setSelectedPunk={setSelectedPunk}
            toggleSwitchItem={toggleSwitchItem}
          />
        </>
      )}
    </div>
  );
};

export default App;
