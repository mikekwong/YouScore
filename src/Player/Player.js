import React from "react";
import PropTypes from "prop-types";
import "./Player.css";

const Player = ({ player, onHandleClick, isCorrect, selectPlayer }) => {
  const {
    first_name,
    last_name,
    fppg,
    images: {
      default: { url }
    }
  } = player;

  return (
    <div>
      <img src={url} alt="profile" onClick={e => onHandleClick(e)} />
      <p onClick={e => onHandleClick(e)}>
        {first_name} {last_name}
      </p>
      {/* <p>{fppg.toFixed(1)}</p> */}
      {/* {selectPlayer && <p>{fppg.toFixed(1)}</p>} */}
      {/* {isCorrect ? <p>Correct</p> : <p>Wrong</p>} */}
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
