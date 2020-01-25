import React, { useState } from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";
import "./Players.css";
import _ from "lodash";

const Players = ({ fppgPlayers, setData }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState(false);
  // this hook to allow the component to re-render on call
  const [, setState] = useState();

  const playerGroup = () => {
    const randomPlayer = Math.floor(Math.random() * fppgPlayers.length - 6) + 0;

    return fppgPlayers.splice(randomPlayer, 2);
  };

  const players = playerGroup();

  console.log(fppgPlayers);

  const onHandleClick = e => {
    const { src, textContent } = e.target;
    const highestScore = Math.max(...players.map(player => player.fppg));
    console.log("clicked");

    if (textContent && correctGuesses < 10) {
      setSelectPlayer(true);

      if (
        _.filter(
          players,
          player => `${player.first_name} ${player.last_name}` === textContent
        )[0].fppg === highestScore
      ) {
        // setCorrectGuesses(correctGuesses + 1);
        // setIsCorrect(true);
      } else {
        // setIsCorrect(false);
      }
    }
    if (src && correctGuesses < 10) {
      setSelectPlayer(true);

      if (
        _.filter(players, player => player.images.default.url === src)[0]
          .fppg === highestScore
      ) {
        // setCorrectGuesses(correctGuesses + 1);
        // setIsCorrect(true);
      } else {
        // setIsCorrect(false);
      }
    }
    // re-render component
    // setState({});
    setSelectPlayer(false);
  };

  console.log(correctGuesses);
  const playerNums = players.map(player => player.fppg);
  console.log(playerNums);

  console.log(selectPlayer);
  return (
    <div>
      {isCorrect ? <p>You win!</p> : <p>You lose!</p>}
      {selectPlayer && <p>{playerNums[0].toFixed(1)}</p>}
      {_.map(players, player => {
        return (
          <Player
            onHandleClick={onHandleClick}
            selectPlayer={selectPlayer}
            key={player.id}
            player={player}
            isCorrect={isCorrect}
          />
        );
      })}
    </div>
  );
};

Players.propTypes = {
  fppgPlayers: PropTypes.array.isRequired
};

export default Players;
