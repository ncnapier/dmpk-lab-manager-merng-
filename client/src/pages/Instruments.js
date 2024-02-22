import React from 'react'
import Header from '../components/Header';
import AddRun from '../components/AddRun';
import Runs from '../components/Runs';




function Instruments(){
    return (
        <div>
            <h1>Instruments Page</h1>
            <Header />
            <h2>Create New Run:</h2>
            <AddRun/>
            <h2>Current Runs:</h2>
            <Runs/>
           
        </div>
    )
}

export default Instruments;