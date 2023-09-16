import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Home  from "./pages/Home.js";
import  Auth  from "./pages/Auth.js";
import  CreateActivity  from "./pages/CreateActivity";
import SavedActivities from "./pages/SavedActivities";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/create-activity' element={<CreateActivity/>} />
        <Route path='/saved-activities' element={<SavedActivities />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      
    
    </div>
  );
}

export default App;
