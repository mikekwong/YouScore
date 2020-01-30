import React, { useEffect } from "react";
import Players from "../Players/Players";
import PropTypes from "prop-types";

const Main = ({
  error,
  loading,
  fppgPlayers,
  cachedPlayers,
  setCachedPlayers
}) => {
  const [playerSelected, setPlayerSelected] = React.useState(false);
  const [correct, setCorrect] = React.useState(false);

  return (
    <div className="main">
      {error && <p className="error">Something went wrong...</p>}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <Players
          correct={correct}
          setCorrect={setCorrect}
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

Main.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  fppgPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      fixture: PropTypes.object,
      fppg: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      images: PropTypes.object.isRequired,
      injured: PropTypes.bool,
      injury_details: PropTypes.string,
      injury_status: PropTypes.string,
      last_name: PropTypes.string.isRequired,
      news: PropTypes.object,
      played: PropTypes.number,
      player_card_url: PropTypes.string,
      position: PropTypes.string,
      removed: PropTypes.bool,
      salary: PropTypes.number,
      starting_order: PropTypes.bool,
      team: PropTypes.object
    })
  ).isRequired,
  cachedPlayers:
    PropTypes.arrayOf(
      PropTypes.shape({
        first_name: PropTypes.string.isRequired,
        fixture: PropTypes.object,
        fppg: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        images: PropTypes.object.isRequired,
        injured: PropTypes.bool,
        injury_details: PropTypes.string,
        injury_status: PropTypes.string,
        last_name: PropTypes.string.isRequired,
        news: PropTypes.object,
        played: PropTypes.number,
        player_card_url: PropTypes.string,
        position: PropTypes.string,
        removed: PropTypes.bool,
        salary: PropTypes.number,
        starting_order: PropTypes.bool,
        team: PropTypes.object
      })
    ) || PropTypes.array,
  setCachedPlayers: PropTypes.func.isRequired
};

export default Main;
