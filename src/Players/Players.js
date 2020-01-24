import React from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";
import "./Players.css";
import _ from "lodash";

const Players = ({ players }) => {
  const filteredPlayers = _.filter(players, player => player.fppg !== null);
  const playerRangeDoubles = _.range(0, filteredPlayers.length, 2);
  const randomPlayer = () => {
    return Math.floor(Math.random() * (playerRangeDoubles.length + 1)) + 0;
  };
  const findPlayer = playerRangeDoubles[randomPlayer()];

  console.log("findPlayer", findPlayer);

  return (
    <div>
      {_.map(_.slice(filteredPlayers, findPlayer, findPlayer + 2), player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;
