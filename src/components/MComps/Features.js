import React from 'react';
import { useState } from 'react';
import Trackfeatures from './Trackfeatures';


function Features() {
    const [trackClick, settrackClick]= useState('false');
    function track ()
    {
        settrackClick('true');
    }
  return (
    <div>
        <button type="button" className="btn btn-primary my-3 mx-3" >Tagging</button>
        <button type="button" className="btn btn-primary" onClick={track}>Tracking</button>
        {trackClick==='true' ? <Trackfeatures/> : <></>}
    </div>
  )
}

export default Features;