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
                    <input type="text" id="schoolInput"/>
                    <label htmlFor="titleInput">Title of study: </label>
                    <input type="text" id="titleInput"/>
                    <label htmlFor="start">Start date:</label>
                    <input type="date" id="start" name="start"/>
                    <label htmlFor="end">End date:</label>
                    <input type="date" id="end" name="end"/>
                </form>
            </div>
        );
    }
}

export default Educational;