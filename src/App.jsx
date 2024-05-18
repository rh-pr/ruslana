import './App.scss';
import Home from './pages/Home';
import { NavBtnProvider } from './contexts/NavBtnContext'

function App() {
  return (
    <NavBtnProvider>
       <div className="App">
        <Home />
      </div>
    </NavBtnProvider>
   
  );
}

export default App;
