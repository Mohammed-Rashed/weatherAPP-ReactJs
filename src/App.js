import React,{Component} from 'react';
import './App.css';
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY='3e245ca6e582e9e3d56da6b87279fb3a'


class App extends Component{
    state={
        data:
            {
                temp:'',
                city:'',
                country:'',
                humidity:'',
                description:'',
                data:false,
                error:''
            }
        ,
    }
    getWeather= async (e)=>{
        e.preventDefault()
        console.log(e.target)

        const city=e.target.elements.city.value
        const country=e.target.elements.country.value
        if(city && country){
            const API_URL=`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=3e245ca6e582e9e3d56da6b87279fb3a`
            const api = await fetch(API_URL)
            const data= await api.json()
            if(data.cod==200){
                this.setState({
                    data:{
                        temp:data.main.temp,
                        city:data.name,
                        country:data.sys.country,
                        humidity:data.main.humidity,
                        description:data.weather[0].description,
                        data:true,
                        error:''
                    },
                })
            }else {
                this.setState({
                    data:{
                        error:data.message
                    },
                })
            }
            //console.log(data)
        }else {
            this.setState({
                data:{
                    error:'City and Country should not be null!'
                },
            })
        }

    }
    render(){
    return(
        <div className="App">
           <div className="container pt-5">
               <Form  getWeather={this.getWeather}/>
               {this.state.data.error?<div  className="alert alert-danger">{this.state.data.error}</div>:''}
               <Weather data={this.state.data} />
           </div>
        </div>
    )
  }
}



export default App;
