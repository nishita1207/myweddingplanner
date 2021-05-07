import {React, useState} from 'react'
import Button from'./Button'
import DisplayActivity from'./DisplayActivity'


const Activity = () => {

    const [activity, setActivity] = useState({})
    

    async function activityData(e) {
        e.preventDefault()
            const data = await fetch( `https://www.boredapi.com/api/activity`)
            .then((res) => res.json())
            .then((data) => {
               
                setActivity ({activity: data}) 
                
            })
            
           
            
            
            
        }

    return (
        <div>
           
                <div>
                    <Button color= 'LightPink' text="Click for a fun activity!" onClick= {e => activityData(e)}/>
                </div>
            <br/>

            {activity.activity != undefined ? (
                <div>
                <DisplayActivity data={activity.activity} />
                
                </div>
                ) : null}
        </div>
  )

 }
export default Activity
