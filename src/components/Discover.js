import React from 'react'
import Weather from'./Weather'
import Joke from'./Joke'
import Nutrition from'./Nutrition'
import Fitness from './Fitness'
import Activity from './Activity'
import Destress from '../destress.png'
//import 'bootstrap/dist/css/bootstrap.min.css';


const Discover = () => {
    return (
        <div>
            <center>
                <h1> Discover & Destress </h1>
            </center>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div class ='card-body text-success'>
            <Weather/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <center>
           <div>
               <img src={Destress} alt ='wedding advice' height={350} width={350} />
           </div>
           </center>
           &nbsp;&nbsp;&nbsp;&nbsp;
            
            <Nutrition/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Fitness/>
            <h2>Bored?</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h5 style={{ color: 'MistyRose' }}> Need to take a break? Have a laugh and click on the joke button!</h5>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Joke/>
            <h5 style={{ color: 'MistyRose' }}> Do you need some fun activities to do with your bridal party? Are you out of ideas? Click the activities button for a fun random activity you could try!</h5>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Activity/> 
            
                
                
            </div>
            
            
        </div>
        
    )
}



        
export default Discover
