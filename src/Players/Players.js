import React from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";
import "./Players.css";

const Players = ({ players }) => {
  return (
    <div>
      {players.map(player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;
