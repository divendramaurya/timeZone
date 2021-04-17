import React from 'react'

function ZoneDropDownComp(props) {
    return (
        <div>
             
        <select className="form-control" onChange={props.clickMe} ref={props.innerRef}>   
        <option value="" title="--select--">--select--</option>   
           {props.Zones.map ((zone) => ( 
            <option  key={zone.zoneName}  value={zone.zoneName}>{zone.zoneName}</option>   

            ))}  
       </select>  
        
            
        </div>
    )
}

export default ZoneDropDownComp
