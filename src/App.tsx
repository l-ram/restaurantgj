import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation.component';

const App = () => {
  return (

    <Routes>

      <Route path='/' element={<Navigation name={'a string'} />}>

        

      </Route>

    </Routes>



  )


}

export default App;
