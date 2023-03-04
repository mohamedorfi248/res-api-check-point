import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import  Add from './Pages/Add';
import Error from './Pages/Error';
import Contacts from './Pages/Contacts';
import NavBar from './Components/NavBar';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <h1>Rest-API</h1>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/*' element={<Error/>}/>

     </Routes>
    </div>
  );
}

export default App;
