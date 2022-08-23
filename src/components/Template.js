import React, {Component} from 'react';
import '../styles/template.css'
import pp from '../assets/pp.jpg';

class Template extends Component{

    render(){
        return(
            <div className='template'>
                <div className='template-header'>
                    <div>
                        <h1>{this.props.all.nameInput}</h1>
                        <h3>{this.props.all.titleInput}</h3>
                    </div>
                    <img src={pp} alt='' id='pp'></img>
                </div>
                <div className='template-contact'>
                    <h3>Contact</h3>
                    <p>E-Mail: {this.props.all.mailInput}</p>
                    <p>Phone: {this.props.all.phoneInput}</p>
                </div>
                <div className='template-profile'>
                    <h3>Profile</h3>
                </div>
                <div className='template-education'>
                    <h3>Education</h3>
                    <p>{this.props.all.schoolInput}</p>
                    <p>{this.props.all.titleStudyInput}</p>
                    <p>{this.props.all.schoolStart}</p>
                    <p>{this.props.all.schoolEnd}</p>
                </div>
                <div className='template-work'>
                    <h3>Work experience</h3>
                    <p>{this.props.all.companyInput}</p>
                    <p>{this.props.all.positionInput}</p>
                    <p>{this.props.all.tasks}</p>
                    <p>{this.props.all.jobStart}</p>
                    <p>{this.props.all.jobEnd}</p>
                </div>
                <div className='template-skills'>
                    <h3>Skills</h3>
                </div>
            </div>
        );
    }
}

export default Template;