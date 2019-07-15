import React ,{Component} from 'react';


class Weather extends Component{
     IfData =()=>{
        if(this.props.data.data==true){
            return(
                <div>
                    <table className="table table-bordered">
                       <tbody>
                           <tr><td colSpan="2">{this.props.data.city},{this.props.data.country}</td></tr>
                           <tr><td>Temperature</td><td>{this.props.data.temp}</td></tr>
                           <tr><td>Humidity</td><td>{this.props.data.humidity}</td></tr>
                           <tr><td>Description</td><td>{this.props.data.description}</td></tr>
                       </tbody>
                    </table>
                </div>
            )
        }else {
            return(
                <div className="result">
                    Please insert City and Country!
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                {this.IfData()}

            </div>
        )
    }
}



export default Weather;
