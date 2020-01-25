import React, { useState, useEffect, useMemo } from "react";
import Players from "./Players/Players";
import fanDuel from "./api/fanDuel";
import "./App.css";
import _ from "lodash";

const App = () => {
  const [data, setData] = useState({ players: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fanDuel("Player.json");
        setData(result.data);
        setIsFetched(true);
      } catch (error) {
        setIsError(error.toString());
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // Discard players that having null fppg values
  const fppgPlayers = _.filter(data.players, player => player.fppg !== null);

  return (
    <div className="App">
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Players fppgPlayers={fppgPlayers} />
      )}
    </div>
  );
};

export default App;
