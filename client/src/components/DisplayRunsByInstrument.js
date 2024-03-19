import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
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
      comments
    }
  }
`;

function DisplayRuns({ instrument }) {
  const { loading, error, data } = useQuery(GET_RUNS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const filteredRuns = data.getRuns.filter(run => run.instrument === instrument);

  return filteredRuns.map(({ id, username, trays, assay, createdAt, comments }) => (
    <div key={id}>
      <p>User: {username}</p>
      <p>Trays: {trays.split(" ")[0]} {trays.split(" ")[1]} {trays.split(" ")[2]}</p>
      <p>Run Created: {new Date(createdAt).toLocaleString()}</p>
      <p>Assay Type: {assay}</p>
      <p>Comments: {comments}</p>
      <p>ID: {id}</p>
      <DeleteRun runId={String(id)} />
      <br />
      <br />
    </div>
  ));
}

function DisplayRunsByInstrument() {
  const [selectedInstrument, setSelectedInstrument] = useState('5500');

  const handleInstrumentChange = (event) => {
    setSelectedInstrument(event.target.value);
  };

  return (
    <div>
      <h3>Display Runs by Instrument:</h3>
      <select value={selectedInstrument} onChange={handleInstrumentChange}>
        <option value="5500">5500</option>
        <option value="6500">6500</option>
        <option value="old4500">Old 4500</option>
        <option value="new4500">New 4500</option>
        {/* Add options for other instruments */}
      </select>
      <DisplayRuns instrument={selectedInstrument} />
    </div>
  );
}

export default DisplayRunsByInstrument;