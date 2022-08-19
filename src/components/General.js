import React, { Component } from 'react';

class General extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="nameInput">Full name: </label>
                    <input type="text" id="nameInput"/>
                    <label htmlFor="mailInput">E-Mail: </label>
                    <input type="email" id="mailInput"/>
                    <label htmlFor="phoneInput">Phone number: </label>
                    <input type="tel" id="phoneInput"/>
                </form>
            </div>
        );
    }
}

export default General;