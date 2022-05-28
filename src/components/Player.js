import React from 'react';
import Dlcs from './Dlcs';
import { useState } from 'react';


function Player() {
    const [stat, setStat] = useState('none');
    function match (){
        setStat('MatchStats');
    }
    function career (){
        setStat('CareerStats');
    }
  return (
    <div>
        <button type="button" className="btn btn-primary my-3 mx-3"  onClick={match}>MatchStats</button>
        <button type="button" className="btn btn-primary" onClick={career} >CareerStats</button>
        <Dlcs mode={stat}/>
    </div>
  )
}

export default Player;