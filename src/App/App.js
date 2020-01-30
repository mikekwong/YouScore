import React from "react";
import "./App.css";
import _ from "lodash";
import useFetch from "../fetchUtil/useFetch";
import Main from "../Main/Main";

const App = () => {
  const [cachedPlayers, setCachedPlayers] = React.useState([]);

  const {
    data,
    loading,
    error
  } = useFetch(
    "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json",
    { players: [] }
  );

  // Return array of players whose ffpg values are not null
  const fppgPlayers = _.filter(data.players, player => player.fppg !== null);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header--headline">
          Guess which player has a higher FPPG?
        </h1>
      </header>
      <main className="main">
        <Main
          loading={loading}
          error={error}
          fppgPlayers={fppgPlayers}
          cachedPlayers={cachedPlayers}
          setCachedPlayers={setCachedPlayers}
        />
      </main>
    </div>
  );
};

export default App;
