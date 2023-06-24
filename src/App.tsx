import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation.component';

const App = () => {
  return (

    <Routes>

      <Route path='/' element={<Navigation/>}/>

    </Routes>



  )


}

export default App;
