import React, { useState, useEffect, useMemo } from "react";
import Players from "./Players/Players";
import fanDuel from "./api/fanDuel";
import "./App.css";

const App = () => {
  const [data, setData] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fanDuel("Player.json");
      setData(result.data);
    };
    fetchData();
  }, []);

  // useMemo(useEffect, [data]);

  return (
    <div className="App">
      <Players players={data.players} />
    </div>
  );
};

export default App;
