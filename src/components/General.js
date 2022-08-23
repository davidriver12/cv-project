import React, { Component } from 'react';

class General extends Component{

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="nameInput">Full name: </label>
                    <input type="text" id="nameInput" onChange={this.props.handler}/>
                    <label htmlFor="titleInput">Title: </label>
                    <input type="text" id="titleInput" onChange={this.props.handler}/>
                    <label htmlFor="mailInput">E-Mail: </label>
                    <input type="email" id="mailInput" onChange={this.props.handler}/>
                    <label htmlFor="phoneInput">Phone number: </label>
                    <input type="tel" id="phoneInput" onChange={this.props.handler}/>
                </form>
            </div>
        );
    }
}

export default General;