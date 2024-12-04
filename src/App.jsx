import './App.scss';
import Home from './pages/Home';
import { NavBtnProvider } from './contexts/NavBtnContext'
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';

function App() {
  return (
    <NavBtnProvider>
       <div className="App">
        <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home />}/>
            {/* <Route path="/skills" component={<Home />} /> */}
            <Route path="/home/skills" component={<Home />} />
            <Route path='/portpholio' element={<Projects />}/>
        </Routes>
      </div>
    </NavBtnProvider>
   
  );
}

export default App;
