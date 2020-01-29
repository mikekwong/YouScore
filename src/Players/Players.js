import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";
import "./Players.css";
import _ from "lodash";

const Players = ({
  playerSelected,
  setPlayerSelected,
  fppgPlayers,
  cachedPlayers,
  setCachedPlayers
}) => {
  const [correctCount, setCorrectCount] = useState(0);
  const [correct, setCorrect] = useState(false);

  const playerGroup = () => {
    const randomPlayer = Math.floor(Math.random() * fppgPlayers.length - 6) + 0;

    return fppgPlayers.splice(randomPlayer, 2);
  };

  const currentPlayers = playerGroup();

  const onClickPlayer = e => {
    const { src, textContent } = e.target;
    const highestScore = Math.max(...currentPlayers.map(player => player.fppg));

    if (correctCount < 10 && playerSelected === false) {
      setCachedPlayers(currentPlayers);
      setPlayerSelected(true);
      if (
        _.filter(currentPlayers, player => player.images.default.url === src)[0]
          .fppg === highestScore
      ) {
        setCorrect(true);
        setCorrectCount(correctCount + 1);
      } else {
        setCorrect(false);
      }
    }
  };

  const mapPlayers = players => {
    return _.map(players, player => (
      <Player
        key={player.id}
        onClickPlayer={onClickPlayer}
        player={player}
        playerSelected={playerSelected}
      />
    ));
  };

  const playerNums = currentPlayers.map(player => player.fppg);

  return (
    <div className="container-players">
      <p className="score">Your score: {correctCount}</p>
      {!playerSelected ? (
        <div className="unselected-players">{mapPlayers(currentPlayers)}</div>
      ) : (
        <div className="selected-players">
          {correct ? <p>You win!</p> : <p>You lose!</p>}
          <button onClick={() => setPlayerSelected(false)}>NEXT ROUND</button>
          {mapPlayers(cachedPlayers)}
        </div>
      )}
    </div>
  );
};

// Players.propTypes = {
//   playerSelected: PropTypes.bool.isRequired,
//   setPlayerSelected: PropTypes.func.isRequired,
//   fppgPlayers: PropTypes.arrayOf(
//     PropTypes.shape({
//       first_name: PropTypes.string.isRequired,
//       fixture: PropTypes.object,
//       fppg: PropTypes.number.isRequired,
//       id: PropTypes.string.isRequired,
//       images: PropTypes.object.isRequired,
//       injured: PropTypes.bool,
//       injury_details: PropTypes.string,
//       injury_status: PropTypes.string,
//       last_name: PropTypes.string.isRequired,
//       news: PropTypes.object,
//       played: PropTypes.number,
//       player_card_url: PropTypes.string,
//       position: PropTypes.string,
//       removed: PropTypes.bool,
//       salary: PropTypes.number,
//       starting_order: PropTypes.bool,
//       team: PropTypes.object
//     })
//   ).isRequired,
//   cachedPlayers:
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         first_name: PropTypes.string.isRequired,
//         fixture: PropTypes.object,
//         fppg: PropTypes.number.isRequired,
//         id: PropTypes.string.isRequired,
//         images: PropTypes.object.isRequired,
//         injured: PropTypes.bool,
//         injury_details: PropTypes.string,
//         injury_status: PropTypes.string,
//         last_name: PropTypes.string.isRequired,
//         news: PropTypes.object,
//         played: PropTypes.number,
//         player_card_url: PropTypes.string,
//         position: PropTypes.string,
//         removed: PropTypes.bool,
//         salary: PropTypes.number,
//         starting_order: PropTypes.bool,
//         team: PropTypes.object
//       })
//     ) || PropTypes.array,
//   setCachedPlayers: PropTypes.func.isRequired
// };

export default Players;
