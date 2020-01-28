import React, { useState, useEffect } from "react";
import Players from "./Players/Players";
import fanDuel from "./api/fanDuel";
import "./App.css";
import _ from "lodash";

const App = () => {
  const [data, setData] = useState({ players: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const [cachedPlayers, setCachedPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fanDuel.get("Player.json");
        if (response.status === 200) {
          setData(response.data);
          setIsFetched(true);
        }
      } catch (error) {
        setIsError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Discard players that having null fppg values
  const fppgPlayers = _.filter(data.players, player => player.fppg !== null);

  return (
    <div className="App">
      {isError && <p>Something went wrong...</p>}
      {isLoading && !isFetched && data.players.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Players
          fppgPlayers={fppgPlayers}
          cachedPlayers={cachedPlayers}
          setCachedPlayers={setCachedPlayers}
        />
      )}
    </div>
  );
};

export default App;
