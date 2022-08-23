import React, { Component } from 'react';

class Educational extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="schoolInput">School name: </label>
                    <input type="text" id="schoolInput" onChange={this.props.handler}/>
                    <label htmlFor="titleStudyInput">Title of study: </label>
                    <input type="text" id="titleStudyInput" onChange={this.props.handler}/>
                    <label htmlFor="schoolStart">Start date:</label>
                    <input type="date" id="schoolStart" name="schoolStart" onChange={this.props.handler}/>
                    <label htmlFor="schoolEnd">End date:</label>
                    <input type="date" id="schoolEnd" name="schoolEnd" onChange={this.props.handler}/>
                </form>
            </div>
        );
    }
}

export default Educational;