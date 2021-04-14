import logo from './logo.svg';
import './App.css';
import React ,{useState, useEffect, useRef} from "react";
import axios from 'axios';


function App() {


  const [selectedzone ,setselectedzone] = useState([]); 
  const [Zones ,setzones] = useState([]);
  const [flag, setFlag] = useState(false);
  const selectref = useRef("");

 

const GetDetails=(e) =>{
console.log(selectref.current.value);

  let url = `http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=${selectref.current.value}`;
  axios.get(url,{ crossdomain: true }).then((result)=>{
        
    setselectedzone(() => result.data);
    setFlag(true); 
    console.log(result.data.timestamp);
       }).catch((error)=>{ 
        console.log("Error",error); 
      });
      console.log(flag)

}

  useEffect(() => {
   axios.get(`http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json`,{ crossdomain: true }).then((result)=>{
         setzones(()=> result.data.zones);
       
      }).catch((error)=>{ 
        console.log("Error",error); 
      });
     
  },[]); 



  useEffect(() => {
    if(selectref.current.value){
      console.log("flag",flag); 
      if(flag){
     var interval = setInterval(() => {
         
          GetDetails(); 
        }, 5000);
      }
       } 
     return () => clearInterval(interval); 
  }); 


var timestamp = selectedzone.timestamp
var date = new Date(timestamp);

  


  return (
    <div className="App">
       <div >
         <div className="row "> 
         <div className='col-md-6'>
         <h2 style={{textAlign : 'center'}}>Get timeZone Details</h2> 

         <div className=""> 
        <select className="form-control" onChange={GetDetails} ref={selectref}>   
        <option value="" title="--select--">--select--</option>  
           {Zones.map ((zone) => ( 
             <option  key={zone.zoneName}  value={zone.zoneName}>{zone.zoneName}</option>  

            ))}  
       </select> 
        </div>

        <p>Below are Zone Details:- </p>

<div style={{fontSize:"20px"}}>


{
    (timestamp && timestamp !==0) && 
    (<table className="table table-condensed table-hover table-striped">
       <thead><tr> 
         <th>TimeStamp</th>
          <th>Date</th>
           <th>CountryName</th> 
           <th>CountryCode</th> 
            </tr> 
       </thead> 
            
            <tbody>
               <tr>
                  <td>{selectedzone.timestamp}</td> 
                  <td>{date.getDate()+ "/"+(date.getMonth()+1)+ "/"+date.getFullYear()+ " "+date.getHours()+ ":"+date.getMinutes()+ ":"+date.getSeconds()}</td> 
                  <td>{selectedzone.countryName}</td> 
                  <td>{selectedzone.countryCode}</td> 
                  </tr>
                   </tbody>  
              </table>)
} 

</div> 

         </div>
         </div>

        
 

   
         </div>
        
    </div>
  );
}

export default App;
