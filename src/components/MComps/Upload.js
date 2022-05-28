import React from 'react'
import Gameplayupload from './Gameplayupload';

function Upload(props) {
  return (
    <div>{props.mode === 'game' ? <Gameplayupload/> : <p>Upload Player Info</p>}
    </div>
  )
}

export default Upload;