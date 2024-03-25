import React from 'react'

import AddRun from '../components/NewRun';
import Runs from '../components/Runs';
import AddRunForm from '../components/NewRun';




function Instruments(){
    return (
        <div>
            <h1>Instruments Page</h1>
            
            <h2>Create New Run:</h2>
            
            <AddRun />
            <div style={{borderTop: "1px solid teal", marginTop: "80px", paddingTop: "20px"}}>
                <h2>Current Runs:</h2>
                <Runs/>
            </div>
        </div>
    )
}

export default Instruments;