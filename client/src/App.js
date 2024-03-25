import React from 'react';
import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter, Navigate, Route, Routes, redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'
// import 'semantic-ui-css/semantic.min.scc';
import './App.css';
import { isAuthenticated } from './context/auth';




import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Instruments from './pages/Instruments';
import Maintenance from './pages/Maintenance';



// Authentication check function
// const isAuthenticated = () => {
//   const authToken = localStorage.getItem('authToken');
//   return authToken !== null; 
// };




function App() {
  return (
    <BrowserRouter>
      <Container style={{height:'100%'}}>
     
    
        <MenuBar />
          <Routes>
          <Route
            path="/"
            element={isAuthenticated() ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/instruments"
            element={isAuthenticated() ? <Instruments /> : <Navigate to="/login" />}
          />
          <Route
            path="/maintenance"
            element={isAuthenticated() ? <Maintenance /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>
          
          {/* <h5 style={{display:'flex', marginBottom: '0px'}}><a style={{marginLeft: "50%",color: 'gray'}}href='https://nattydevs.com' target='_blank'>Natty Devs, 2024</a></h5> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
