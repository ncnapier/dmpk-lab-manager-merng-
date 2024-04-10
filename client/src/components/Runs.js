import React, { useState } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { Form } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import {  gql } from '@apollo/client';
import DeleteRun from './DeleteRun';

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

function fixInstrument(selectedInstrument){
  let instrumentName = ''
      if(selectedInstrument === 'old4500'){
          instrumentName = 'Old 4500'
      } else if(selectedInstrument === 'new4500'){
          instrumentName = 'New 4500'
      }
      else if(selectedInstrument === 'old4500lc'){
          instrumentName = 'Old 4500 LC'
      }else if(selectedInstrument === 'new4500lc'){
          instrumentName = 'New 4500 LC'
      }
      else if(selectedInstrument === '5500lc'){
          instrumentName = '5500 LC'
      }else if(selectedInstrument === '6500lc'){
          instrumentName = '6500 LC'
      }else{
          instrumentName = selectedInstrument
      }
    return instrumentName  
}

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
        </Form.Group>
      </Form>
      {selectedInstrument === '6500' && <InstrumentRuns />}
      {selectedInstrument === '5500' && <InstrumentRuns />}
      {selectedInstrument === 'new4500' && <InstrumentRuns />}
      {selectedInstrument === 'old4500' && <InstrumentRuns />}
    </div>
  );

  function DisplayRuns() {
    const { loading, error, data } = useQuery(GET_RUNS);
    
    function commentOnRun(){
      console.log('comment on post');
  }

    let SelectRuns = []
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    for (let i = 0; i < data.getRuns.length; i++) {
        if (data.getRuns[i].instrument === selectedInstrument) {
           SelectRuns.push(data.getRuns[i])
            
        }
    }
            return SelectRuns.map(({ id, instrument, username, trays, assay, createdAt, comments }) => (
                <Card fluid key={id}>
                
                <Card.Content>
                    <Card.Header>Assay Type: {assay}</Card.Header>
                    <Card.Header>User:  {username}</Card.Header>
                    <Card.Header>Trays: {trays.split(" ")[0]}  {trays.split(" ")[1]} {trays.split(" ")[2]}</Card.Header>
                    <Card.Header>Run Created: {new Date(createdAt).toLocaleString()}</Card.Header>
                    <Card.Meta as={Link} to={`/run/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                    
                    </Card.Content>
                    <Card.Content extra>
                    <Button as='div' labelPosition='right' onClick={commentOnRun}>
      <Button color='blue' basic>
        <Icon name='comments' />
        
      </Button>
      
    </Button>
                    <DeleteRun runId = {String(id)}/>
                </Card.Content>
                    
                </Card>
            ));
        }

function InstrumentRuns(){

    return(
        <><div>
            <h3>{fixInstrument(selectedInstrument)} Runs:</h3><br />
        </div><DisplayRuns /></>
    )
}
}

export default Runs;