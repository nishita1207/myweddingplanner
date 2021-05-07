import React from 'react'

function DisplayActivity(props) {
    const {data} = props
    console.log(data)
    
    return (
        <div>
            <span>              
                {data.activity}
            </span>
           
        </div>
    )
}

export default DisplayActivity