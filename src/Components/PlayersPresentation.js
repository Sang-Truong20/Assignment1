import React, {useState} from 'react'
import ListOfPlayer from '../Share/ListOfPlayer'

function PlayersPresentation ({players}) {
  const [player, setPlayer] = useState([])  

    return (
      <div className='player-container'>
          {ListOfPlayer.map((player)=>(
          <div className='column'>
              <div className='card'>
                  <img src={player.img} alt=""/>
                  <h3>{player.name}</h3>
                  <p className='title'>{player.club}</p>
                  <p className='btn'><button onClick={()=>{setPlayer(player)}}><a href="#popup1" id="openPopUp">Detail</a></button></p>
              </div>
          </div>
          ))}
          <div id='popup1' className='overlay'>
            <div className='popup'>
              <img src={player.img} alt=""/>
              <h2>{player.name}</h2>
              <a className='close' href="#2">&times;</a>
              <div className='content'>
                  {player.info}
              </div>
            </div>
          </div>
      </div>
    )
  }

export default PlayersPresentation