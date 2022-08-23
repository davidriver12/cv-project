import React, {Component} from 'react';

class Practical extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="companyInput">Company name: </label>
                    <input type="text" id="companyInput" onChange={this.props.handler}/>
                    <label htmlFor="positionInput">Position name: </label>
                    <input type="text" id="positionInput" onChange={this.props.handler}/>
                    <label htmlFor='tasks'>Main tasks of the job: </label>
                    <textarea name='tasks' rows='1' cols='10' id='tasks' onChange={this.props.handler}></textarea>
                    <label htmlFor="jobStart" >Start date:</label>
                    <input type="date" id="jobStart" name="jobStart" onChange={this.props.handler}/>
                    <label htmlFor="jobEnd">End date:</label>
                    <input type="date" id="jobEnd" name="jobEnd" onChange={this.props.handler}/>
                </form>
            </div>
        );
    }
}

export default Practical;