import React from "react";
import PropTypes from "prop-types";
import "./Player.css";

const Player = ({ player, onClickPlayer, playerSelected }) => {
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
      <div>
        <img src={url} alt="profile" onClick={e => onClickPlayer(e)} />
        <p>
          {first_name} {last_name}
        </p>
        {playerSelected && <p>{fppg.toFixed(1)}</p>}
      </div>
      <p>{fppg.toFixed(1)}</p>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
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
  }).isRequired,
  onClickPlayer: PropTypes.func.isRequired,
  playerSelected: PropTypes.bool.isRequired
};

export default Player;
