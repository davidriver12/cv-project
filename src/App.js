import General from './components/General.js';
import Educational from './components/Educational.js';
import Practical from './components/Practical.js';
import Template from './components/Template.js';
import './styles/app.css';

function App() {
  return (
    <div className='page'>
      <div className="App">
        <General />
        <Educational />
        <Practical />
        <button>Submit</button>
      </div>
      <Template />
    </div>
  );
}

export default App;
