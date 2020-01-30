import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";
import "./Players.css";
import _ from "lodash";

const Players = ({
  playerSelected,
  setPlayerSelected,
  fppgPlayers,
  cachedPlayers,
  setCachedPlayers,
  correct,
  setCorrect
}) => {
  const [correctCount, setCorrectCount] = React.useState(0);
  const [newRound, setNewRound] = React.useState(true);

  useEffect(() => {
    if (newRound) setPlayerSelected(false);
  });

  const playerGroup = () => {
    const randomPlayer = Math.floor(
      Math.random() * Math.floor(fppgPlayers.length - 3)
    );
    return fppgPlayers.splice(randomPlayer, 2);
  };

  const currentPlayers = playerGroup();

  const onClickPlayer = e => {
    const { src, textContent } = e.target;
    const highestScore = Math.max(
      ..._.map(currentPlayers, player => player.fppg)
    );

    if (correctCount < 10 && newRound) {
      setCachedPlayers(currentPlayers);
      setPlayerSelected(true);
      setNewRound(false);
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

  return (
    <div className="players--container">
      <p className="players__score">Your score: {correctCount}</p>
      {!playerSelected ? (
        mapPlayers(currentPlayers)
      ) : (
        <Fragment>
          {correct ? (
            <p className="players__correct">Correct!</p>
          ) : (
            <p className="players__incorrect">Try again!</p>
          )}
          {correctCount !== 10 && (
            <button
              className="players__newRound"
              onClick={() => setNewRound(true)}
            >
              NEXT ROUND
            </button>
          )}
          {mapPlayers(cachedPlayers)}
        </Fragment>
      )}
    </div>
  );
};

Players.propTypes = {
  playerSelected: PropTypes.bool.isRequired,
  setPlayerSelected: PropTypes.func.isRequired,
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

export default Players;
