// import React, { useState, Component } from 'react';
// import  {RadialMenu}  from 'react-radial-menu'
// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag'
// import SixtyFiveHundredRuns from './6500Runs'
// import FiftyFiveHundredRuns from './5500Runs'
// import NewFourtyFiveHundredRuns from './New4500Runs'
// import OldFourtyFiveHundredRuns from './Old4500Runs'
// import { Form } from 'semantic-ui-react';

// // const ComponentA = () => <SixtyFiveHundredRuns />


// //     const [selectedComponent, setSeletedComponent] = useState(null);

// //     const handleSelectComponent = (component) => {
// //         setSeletedComponent(component);
// //     };




// class Runs extends Component {
    
//     state = {}
  
//     handleChange = (e, { value }) => this.setState({ value })


//     render(){
//     const {value} = this.state;
   
//     console.log(value)
//     return (
        
//        <div>
       
//         <Form>
//         <Form.Group inline>
//           <label>Instruments</label>
//           <Form.Radio
//             label='6500'
//             value={<SixtyFiveHundredRuns />}
//             checked={ value === <SixtyFiveHundredRuns />}
            
//             onChange={this.handleChange}
//           />
//           <Form.Radio
//             label='5500'
//             value= {<FiftyFiveHundredRuns />}
//             checked={value === <FiftyFiveHundredRuns />}
//             onChange={this.handleChange}
//           />
//           <Form.Radio
//             label='New 4500'
//             value= {<NewFourtyFiveHundredRuns />}
//             checked={value === <NewFourtyFiveHundredRuns />}
//             onChange={this.handleChange}
//           />
//           <Form.Radio
//             label='Old 4500'
//             value= {<OldFourtyFiveHundredRuns />}
//             checked={value === <OldFourtyFiveHundredRuns />}
//             onChange={this.handleChange}
//           />
         
         
//         </Form.Group>
//         </Form>
//         <div>
//             {value}
//         </div>
//        </div>
//   )
// }
// }

// export default Runs

import React, { useState } from 'react';
import SixtyFiveHundredRuns from './6500Runs';
import FiftyFiveHundredRuns from './5500Runs';
import NewFourtyFiveHundredRuns from './New4500Runs';
import OldFourtyFiveHundredRuns from './Old4500Runs';
import { Form } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import {  gql } from '@apollo/client';

const GET_RUNS = gql`
  query {
    getRuns {
      id
      instrument
      trays
      assay
      username
      createdAt
      
    }
  }
`;


function Runs() {
  const [selectedInstrument, setSelectedInstrument] = useState('');
  const { loading, error, data, refetch } = useQuery(GET_RUNS);

  const handleChange = (_, { value }) => setSelectedInstrument(value);

  const handleRunCreated = () => {
    refetch();
    setSelectedInstrument('');
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  return (
    <div>
      <Form>
        <Form.Group inline>
          <label>Instruments</label>
          <Form.Radio
            label='Old 4500'
            value='old4500'
            checked={selectedInstrument === 'old4500'}
            onChange={handleChange}
          />
          <Form.Radio
            label='New 4500'
            value='new4500'
            checked={selectedInstrument === 'new4500'}
            onChange={handleChange}
          />
          <Form.Radio
            label='5500'
            value='5500'
            checked={selectedInstrument === '5500'}
            onChange={handleChange}
          />
          <Form.Radio
            label='6500'
            value='6500'
            checked={selectedInstrument === '6500'}
            onChange={handleChange}
          />
          {/* Add similar radio buttons for other instruments */}
        </Form.Group>
      </Form>
      {/* Render the selected instrument component */}
      {selectedInstrument === '6500' && <SixtyFiveHundredRuns />}
      {selectedInstrument === '5500' && <FiftyFiveHundredRuns />}
      {selectedInstrument === 'new4500' && <NewFourtyFiveHundredRuns />}
      {selectedInstrument === 'old4500' && <OldFourtyFiveHundredRuns />}
      {/* Add similar conditional rendering for other instruments */}
    </div>
  );
}

export default Runs;