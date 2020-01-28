import React, { useState, useEffect } from "react";
import Players from "./Players/Players";
import "./App.css";
import _ from "lodash";
import useFetch from "./api/useFetch";

const App = () => {
  const [cachedPlayers, setCachedPlayers] = useState([]);

  const {
    data,
    loading,
    error,
    fetched
  } = useFetch(
    "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json",
    { players: [] }
  );

  // Discard players that having null fppg values
  const fppgPlayers = _.filter(data.players, player => player.fppg !== null);

  return (
    <div className="App">
      {error && <p>Something went wrong...</p>}
      {loading && !fetched && data.length === 0 ? (
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
