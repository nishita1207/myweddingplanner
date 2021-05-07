import {React, useState} from 'react'
import Button from'./Button'
import DisplayWeather from "./DisplayWeather"

const Weather = () => {

    const APIKEY = "7f15657dcc46d8628e592ced07844ba0"

    const [form, setForm] = useState({
        city:"",
        country:""
    })
    const [weather, setWeather] = useState([])

    async function weatherData(e) {
        e.preventDefault()
        if(form.city == "" ){
            alert("Add a city")
        } else {
            const data = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
            ).then((res) => res.json())
            .then((data) => data)

            setWeather ({data: data})
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == 'city'){
            setForm({...form, city:value})
        }

        if (name == 'country'){
            setForm({...form, country:value})
        }
       
    }
    return (
        <div>
        
            <form>
            <h5 style={{ color: 'MistyRose' }}> Have a lot of errands to run today? Check the weather in your area before you go so you're prepared and ready to conquer the day!</h5>
                <h3 style = {{ color: 'Pink' }}>Today's Forecast:  </h3>
                <input type="text" name="city" placeholder= "City" onChange = { e => handleChange(e)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="country" placeholder= "Country" onChange = { e => handleChange(e)}/>
                &nbsp;&nbsp;
                <Button color= 'PaleVioletRed' text="Submit" onClick= {e => weatherData(e)} />
             
            </form>

            {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  )
}
 
export default Weather
 