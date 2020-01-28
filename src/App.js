import React, { useState, useEffect } from "react";
import Players from "./Players/Players";
import fanDuel from "./api/fanDuel";
import "./App.css";
import _ from "lodash";
import useFetch from "./api/useFetch";

const App = () => {
  const [cachedPlayers, setCachedPlayers] = useState([]);

  const { data, isLoading, isError, isFetched } = useFetch(
    fanDuel,
    "Player.json"
  );

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
