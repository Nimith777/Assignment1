import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';
import Homr from './components/Homr';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Add></Add>
      <Routes>
      <Route path="/h" element={< Homr/>} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
