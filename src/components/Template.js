import React, {Component} from 'react';
import '../styles/template.css'
import pp from '../assets/pp.jpg';

class Template extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='template'>
                <div className='template-header'></div>
                <div className='template-body'>
                    <div className='template-content'>
                        <section>General information</section>
                        <section>Education</section>
                        <section>Practical Experience</section>
                    </div>
                    <div className='template-side'>
                        <img src={pp} alt='' id='pp'></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Template;