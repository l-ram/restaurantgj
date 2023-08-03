import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation.component';
import { Header } from './components/header';

const App = () => {
  return (

    <Routes>

      <Route path='/' element={<Navigation name={'a string'} />}>
        <Route path='/' element={<Header/>}></Route>
      </Route>

    </Routes>



  )


}

export default App;
