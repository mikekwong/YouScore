import React from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";
import "./Players.css";
import _ from "lodash";

const Players = ({ players }) => {
  // Discard players that having null fppg values
  const filteredPlayers = _.filter(players, player => player.fppg !== null);
  const randomPlayer =
    Math.floor(Math.random() * filteredPlayers.length - 4) + 0;

  const playerGroup = filteredPlayers.splice(randomPlayer, 4);

  const onPlayerSelect = e => {};

  console.log(playerGroup.map(player => player.fppg));

  return (
    <div>
      {_.map(playerGroup, player => {
        return (
          <Player onClick={onPlayerSelect} key={player.id} player={player} />
        );
      })}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;
