import React from "react";
import Players from "../Players/Players";

const Main = ({
  error,
  loading,
  fppgPlayers,
  cachedPlayers,
  setCachedPlayers
}) => {
  return (
    <div>
      {error && <p className="error">Something went wrong...</p>}
      {loading ? (
        <p className="loading">Loading...</p>
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

export default Main;
