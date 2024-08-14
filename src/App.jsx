import './App.scss';
import Home from './pages/Home';
import { NavBtnProvider } from './contexts/NavBtnContext'
import Projects from './Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <NavBtnProvider>
       <div className="App">
       {/* <Home /> */}
        <Routes >
        {/* <Home />  */}
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home />}/>
           {/* <Route path='/projects' element={<Projects />}/> */}
        </Routes>
      </div>
    </NavBtnProvider>
   
  );
}

export default App;
