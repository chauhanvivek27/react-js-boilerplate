import  Header  from './component/Header';
import  SetMode  from './component/SetMode';
import SetModeFunc from './component/SetDarkMode';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SetModeFunc />
        {/* <SetMode /> */}
      </header>
    </div>
  );
}

export default App;
