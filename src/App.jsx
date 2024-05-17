import './App.css';
import Home from './components/Home';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  return (
    <div className="App">
      <LanguageSwitch />
      <Home />
    </div>
  );
}

export default App;
