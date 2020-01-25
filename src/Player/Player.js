import React from "react";
import PropTypes from "prop-types";
import "./Player.css";

const Player = ({ player, onPlayerSelect, isCorrect }) => {
  const {
    first_name,
    last_name,
    fppg,
    images: {
      default: { url }
    }
  } = player;

  return (
    <div onClick={e => onPlayerSelect(e)}>
      <img src={url} alt="profile" />
      <p>
        {first_name} {last_name}
      </p>
      <p>{fppg.toFixed(1)}</p>
      {/* {isCorrect && <p>{fppg.toFixed(1)}</p>} */}
      {isCorrect && <p>Correct</p>}
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
