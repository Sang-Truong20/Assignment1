import React from 'react'
import ReactPlayer from 'react-player'

const Modal = ({setIsOpen, player}) => {
  return (
    <div className='modal-show' onClick={() => setIsOpen(false)}>
        <div id="modal1" className='modal' style={{display:'block', top:'35%' }}>
            <div className='modal-content'>
                <h4>Video for {player.name}</h4>
                <p>
                <ReactPlayer url={player.clip} width="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscopre; picture-in-picture" allowfullscreen/>
                </p>
            </div>
            <div className='modal-footer'>
                <a className='modal-close red-text' href='#2'>Close</a>
            </div>
        </div>
    </div>
  )
}

export default Modal