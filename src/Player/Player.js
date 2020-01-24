import React from "react";
import PropTypes from "prop-types";
import "./Player.css";

const Player = ({ player }) => {
  const {
    first_name,
    fppg,
    images: {
      default: { url }
    }
  } = player;

  const handleClick = () => {};

  return (
    <div onClick={handleClick}>
      <img src={url} alt="profile" />
      <p>{first_name}</p>
      {/* <p>{fppg.toFixed(1) || `${fppg}.0`}</p> */}
      <p>{fppg.toFixed(1)}</p>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
