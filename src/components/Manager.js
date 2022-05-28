import React from 'react';
import { useState } from 'react';
import Upload from './MComps/Upload';
import Features from './MComps/Features';

function Manager() {
  const [upload, setUpload] = useState('none');
  function team ()
  {
    setUpload('team');
  }
  function game ()
  {
    setUpload('game');
  }
  return (
    <div className='container'>
        <p>Upload Section</p>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={team}>TeamData</button>
        <button type="button" className="btn btn-primary" onClick={game}>Gameplay</button>
        {upload !== 'none' ? <><Upload  mode={upload}/> <Features /></>: <></>}
        
    </div>
      
  )
}

export default Manager;