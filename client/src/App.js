import React from 'react';
import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// import 'semantic-ui-css/semantic.min.scc';
import './App.css';



import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Instruments from './pages/Instruments';

function App() {
  return (
    <BrowserRouter>
      <Container>
      
    
        <MenuBar />
          <Routes>
            <Route exact path = '/' Component={Home}/>
            <Route exact path = '/Instruments' Component={Instruments}/>
            <Route exact path='/login' Component={Login}/>
            <Route exact path='/register' Component={Register}/>
          </Routes>
          
          
      </Container>
    </BrowserRouter>
  );
}

export default App;
