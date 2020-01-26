import React from 'react'
import PropTypes from 'prop-types'
import './Player.css'

const Player = ({ player, onClickPlayer, playerSelected }) => {
  const {
    first_name,
    last_name,
    fppg,
    images: {
      default: { url }
    }
  } = player

  return (
    <div>
      <div>
        <img src={url} alt='profile' onClick={e => onClickPlayer(e)} />
        <p>
          {first_name} {last_name}
        </p>
        {playerSelected && <p>{fppg.toFixed(1)}</p>}
      </div>
      <p>{fppg.toFixed(1)}</p>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
  onClickPlayer: PropTypes.func.isRequired,
  playerSelected: PropTypes.bool.isRequired
}

export default Player
