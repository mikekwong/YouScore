import React, { useState } from "react";
import Players from "../Players/Players";

const Main = ({
  error,
  loading,
  fppgPlayers,
  cachedPlayers,
  setCachedPlayers
}) => {
  const [playerSelected, setPlayerSelected] = useState(false);

  return (
    <div>
      {error && <p className="error">Something went wrong...</p>}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <Players
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
          fppgPlayers={fppgPlayers}
          cachedPlayers={cachedPlayers}
          setCachedPlayers={setCachedPlayers}
        />
      )}
    </div>
  );
};

export default Main;
