
// import React, { useState } from 'react';
// import SixtyFiveHundredRuns from './6500Runs';
// import FiftyFiveHundredRuns from './5500Runs';
// import NewFourtyFiveHundredRuns from './New4500Runs';
// import OldFourtyFiveHundredRuns from './Old4500Runs';
// import { Form } from 'semantic-ui-react';
// import { useQuery } from '@apollo/client';
// import {  gql } from '@apollo/client';

// const GET_MAINTREQS = gql`
//   query {
//     getMaintReqs {
//       id
//       instrument
//       username
//       comments {
//         id
//         username
//         createdAt
//         body
//       }
//       createdAt
//       body
      
//     }
//   }
// `;


// function MaintReqs() {
//   const [selectedInstrument, setSelectedInstrument] = useState('');
//   const { loading, error, data, refetch } = useQuery(GET_MAINTREQS);

//   const handleChange = (_, { value }) => setSelectedInstrument(value);

//   const handleMaintReqCreated = () => {
//     refetch();
//     setSelectedInstrument('');
//   }

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;


//   return (
//     <div>
//       <Form>
//         <Form.Group inline>
//           <label>Instruments</label>
//           <Form.Radio
//             label='Old 4500'
//             value='old4500'
//             checked={selectedInstrument === 'old4500'}
//             onChange={handleChange}
//           />
//           <Form.Radio
//             label='New 4500'
//             value='new4500'
//             checked={selectedInstrument === 'new4500'}
//             onChange={handleChange}
//           />
//           <Form.Radio
//             label='5500'
//             value='5500'
//             checked={selectedInstrument === '5500'}
//             onChange={handleChange}
//           />
//           <Form.Radio
//             label='6500'
//             value='6500'
//             checked={selectedInstrument === '6500'}
//             onChange={handleChange}
//           />
//           <Form.Radio
//             label='Old 4500 LC'
//             value='old4500lc'
//             checked={selectedInstrument === 'old4500lc'}
//             onChange={handleChange}
//           />
//           <Form.Radio
//             label='New 4500 LC'
//             value='new4500lc'
//             checked={selectedInstrument === 'new4500lc'}
//             onChange={handleChange}
//           />
//           <Form.Radio
//             label='5500 LC'
//             value='5500lc'
//             checked={selectedInstrument === '5500lc'}
//             onChange={handleChange}
//           />
//           <Form.Radio
//             label='6500 LC'
//             value='6500lc'
//             checked={selectedInstrument === '6500lc'}
//             onChange={handleChange}
//           />
//           {/* Add similar radio buttons for other instruments */}
//         </Form.Group>
//       </Form>
//       {/* Render the selected instrument component */}
//       {selectedInstrument === '6500' && <SixtyFiveHundredRuns />}
//       {selectedInstrument === '5500' && <FiftyFiveHundredRuns />}
//       {selectedInstrument === 'new4500' && <NewFourtyFiveHundredRuns />}
//       {selectedInstrument === 'old4500' && <OldFourtyFiveHundredRuns />}
//       {selectedInstrument === '6500lc' && <SixtyFiveHundredRuns />}
//       {selectedInstrument === '5500lc' && <FiftyFiveHundredRuns />}
//       {selectedInstrument === 'new4500lc' && <NewFourtyFiveHundredRuns />}
//       {selectedInstrument === 'old4500lc' && <OldFourtyFiveHundredRuns />}
//       {/* Add similar conditional rendering for other instruments */}
//     </div>
//   );
// }

// export default MaintReqs;

import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import DeleteMaintReq from './DeleteMaintReq';

function MaintReqs({ maintReq: { createdAt, username, id, body, instrument}}){
    
    function commentOnMaintReq(){
        console.log('comment on post');
    }
    return (
        <Card fluid>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header>{instrument}</Card.Header>
          <Card.Meta as={Link} to={`/maintReq/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
          <Card.Header>{username}:</Card.Header>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        
      

        <Button as='div' labelPosition='right' onClick={commentOnMaintReq}>
      <Button color='blue' basic>
        <Icon name='comments' />
        
      </Button>
      
    </Button>
    <DeleteMaintReq maintReqId = {String(id)}/>
        </Card.Content>
      </Card>
    )
}

export default MaintReqs;