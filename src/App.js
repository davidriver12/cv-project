import React, {Component} from 'react';
import General from './components/General.js';
import Educational from './components/Educational.js';
import Practical from './components/Practical.js';
import Template from './components/Template.js';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
      titleInput: '',
      mailInput: '',
      phoneInput: '',
      schoolInput: '',
      titleStudyInput: '',
      schoolStart: '',
      schoolEnd: '',
      companyInput: '',
      positionInput: '',
      tasks: '',
      jobStart: '',
      jobEnd: ''
    }

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({
        [event.target.id]: event.target.value
    });  
  }

  render(){
    return (
      <div className='page'>
        <div className='header'>CV Application</div>
        <div className='page-content'>
          <div className="App">
            <General handler={this.inputChangeHandler}/>
            <Educational handler={this.inputChangeHandler}/>
            <Practical handler={this.inputChangeHandler}/>
            <button>Submit</button>
          </div>
            <Template all={this.state}/>
          </div>
      </div>
    );
  }
};

export default App;
