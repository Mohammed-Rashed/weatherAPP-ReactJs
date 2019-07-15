import React ,{Component} from 'react';

class Form extends Component{
    render(){
        return(
            <div className="form-group">
                <form onSubmit={this.props.getWeather}>
                    <div className="form-row">
                        <div className="col-6">
                            <input type="text" placeholder="City" name="city" className="form-control" />
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder="Country"  name="country" className="form-control"  />
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-info">Get Weather</button>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}



export default Form;
