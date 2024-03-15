import React from 'react'

import AddRun from '../components/NewRun';
import Runs from '../components/Runs';
import AddRunForm from '../components/NewRun';




function Instruments(){
    return (
        <div>
            <h1>Instruments Page</h1>
            
            <h2>Create New Run:</h2>
            <AddRun/>
            <AddRunForm/>
            <h2>Current Runs:</h2>
            <Runs/>
           
        </div>
    )
}

export default Instruments;