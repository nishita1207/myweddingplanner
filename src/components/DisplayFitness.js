import React from 'react'

function DisplayFitness(props) {
    const {data} = props
    console.log(props)
    // console.log(data.map(items => console.log(items)) + "string")
    console.log(data.data)
    
    let cal = 0
    for (let i = 0; i < data.exercises.length; i ++) {
        cal += data.exercises[i].nf_calories
    }
    
    
    return (
        <div>
            
            <span>      
               You burned {cal} calories.
            </span>
           
        </div>
    )
}

export default DisplayFitness