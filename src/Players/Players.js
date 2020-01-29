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

  useEffect(() => setPlayerSelected(false));

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

    if (correctCount < 10 && playerSelected === false && newRound === true) {
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
        newRound={newRound}
      />
    ));
  };

  const playerNums = _.map(currentPlayers, player => player.fppg);

  return (
    <div className="container-players">
      <p className="score">Your score: {correctCount}</p>
      {!playerSelected ? (
        mapPlayers(currentPlayers)
      ) : (
        <Fragment>
          {correct ? (
            <p className="correct">Correct!</p>
          ) : (
            <p className="incorrect">Try again!</p>
          )}
          {correctCount !== 10 && (
            <button onClick={() => setNewRound(true)}>NEXT ROUND</button>
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
