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
  return (
    <div>
      <p>{first_name}</p>
      <img src={url} alt="profile" />
      <p>{fppg}</p>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
