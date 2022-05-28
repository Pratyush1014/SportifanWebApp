import React from 'react';

function Dlcs(props) {
  return (
   <div>
       {props.mode != 'none' ? <><p>{props.mode}</p>
   <button type="button" className="btn btn-primary my-3 mx-3"  >HeatMap</button>
   <button type="button" className="btn btn-primary my-3 mx-3"  >KeyMoments</button>
   <button type="button" className="btn btn-primary my-3 mx-3"  >PlayerReport</button> </> : <></>}
    
    </div>
  )
}

export default Dlcs