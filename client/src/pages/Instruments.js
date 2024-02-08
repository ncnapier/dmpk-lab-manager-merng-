import React from 'react'
import Header from '../components/Header';
import AddRun from '../components/AddRun';
import Runs from '../components/Runs';

function Instruments(){
    return (
        <div>
            <h1>Instruments Page</h1>
            <Header />
            <AddRun/>
            <Runs/>
        </div>
    )
}

export default Instruments;