import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Player from '../Player/Player'
import './Players.css'
import _ from 'lodash'

const Players = ({ fppgPlayers, cachedPlayers, setCachedPlayers }) => {
  const [playerSelected, setPlayerSelected] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [correct, setCorrect] = useState(false)

  const playerGroup = () => {
    const randomPlayer = Math.floor(Math.random() * fppgPlayers.length - 6) + 0

    return fppgPlayers.splice(randomPlayer, 2)
  }

  const currentPlayers = playerGroup()

  const highestScore = Math.max(...currentPlayers.map(player => player.fppg))
  const onClickPlayer = e => {
    const { src, textContent } = e.target

    if (correct < 10 && playerSelected === false) {
      setCachedPlayers(currentPlayers)
      setPlayerSelected(true)
      if (
        _.filter(currentPlayers, player => player.images.default.url === src)[0]
          .fppg === highestScore
      ) {
        setCorrect(true)
        setCorrectCount(correctCount + 1)
        console.log(correct)
      } else {
        setCorrect(false)
        console.log(correct)
      }
    }
  }

  const mapPlayers = players => {
    return _.map(players, player => (
      <Player
        key={player.id}
        onClickPlayer={onClickPlayer}
        player={player}
        playerSelected={playerSelected}
      />
    ))
  }

  const playerNums = currentPlayers.map(player => player.fppg)
  console.log(playerNums)

  console.log(currentPlayers)
  return (
    <div>
      <p>Correct times: {correctCount}</p>
      {!playerSelected ? (
        <div>{mapPlayers(currentPlayers)}</div>
      ) : (
        <div>
          {correct ? <p>You win!</p> : <p>You lose!</p>}
          <button onClick={() => setPlayerSelected(false)}>NEXT ROUND</button>
          {mapPlayers(cachedPlayers)}
        </div>
      )}
    </div>
  )
}

Players.propTypes = {
  fppgPlayers: PropTypes.array.isRequired,
  cachedPlayers: PropTypes.array.isRequired,
  setCachedPlayers: PropTypes.func.isRequired
}

export default Players
