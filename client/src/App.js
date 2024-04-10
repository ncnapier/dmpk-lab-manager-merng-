import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import { isAuthenticated } from './context/auth';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Instruments from './pages/Instruments';
import Maintenance from './pages/Maintenance';


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
      </Container>
    </BrowserRouter>
  );
}

export default App;
