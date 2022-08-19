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
                    <input type="text" id="companyInput"/>
                    <label htmlFor="positionInput">Position name: </label>
                    <input type="text" id="positionInput"/>
                    <label htmlFor='tasks'>Main tasks of the job: </label>
                    <textarea name='tasks' rows='1' cols='10'></textarea>
                    <label htmlFor="start">Start date:</label>
                    <input type="date" id="start" name="start"/>
                    <label htmlFor="end">End date:</label>
                    <input type="date" id="end" name="end"/>
                </form>
            </div>
        );
    }
}

export default Practical;