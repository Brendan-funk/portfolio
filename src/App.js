import './App.css';
import jsLogo from './photos/jsLogo.png';
import cssLogo from './photos/cssLogo.png';
import htmlLogo from './photos/htmlLogo.png';
import javaLogo from './photos/javalogo.png';
import rubyLogo from './photos/rubyLogo.png';
import pythonLogo from './photos/pythonLogo.png';
import sqlLogo from './photos/sqlLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Name-card'>
          <div className='Name'>  
          <p> Brendan Funk </p>
          </div>
          <div className='AKA'>
            <p> aka Denda Web Development</p>
          </div>
        </div>
        <div className='Languages'>
          <p className='Section-title'> Languages</p>
          <div className='Language-list'>
            <div className='Language-info'>
              <img src={jsLogo} className='Language-logo'></img>
              <p className='Language-name'>JavaScript</p>
            </div>
            <div className='Language-info'>
              <img src={cssLogo} className='Language-logo'></img>
              <p className='Language-name'>CSS</p>
            </div>
            <div className='Language-info'>
              <img src={htmlLogo} className='Language-logo'></img>
              <p className='Language-name'>HTML</p>
            </div>
            <div className='Language-info'>
              <img src={javaLogo} className='Language-logo'></img>
              <p className='Language-name'>Java</p>
            </div>
            <div className='Language-info'>
              <img src={rubyLogo} className='Language-logo'></img>
              <p className='Language-name'>Ruby</p>
            </div>
            <div className='Language-info'>
              <img src={pythonLogo} className='Language-logo'></img>
              <p className='Language-name'>Python</p>
            </div>
            <div className='Language-info'>
              <img src={sqlLogo} className='Language-logo'></img>
              <p className='Language-name'>SQL</p>
            </div>
          </div>
        </div>
        <div className='Projects'></div>
      </header>
    </div>
  );
}

export default App;
