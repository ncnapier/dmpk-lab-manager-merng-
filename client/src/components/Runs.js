
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'

const GET_RUNS = gql`
  query {
    getRuns {
      id
      instrument
      trays
      assay
      username
      comments {
        id
      }
      createdAt
      }
    }

`
function DisplayRuns() {
  const { loading, error, data } = useQuery(GET_RUNS);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getRuns.map(({ id, instrument, username, trays, assay, createdAt, comments }) => (
    <div key={id}>
      <h3>{instrument} Run:</h3>
      <p>User: {username}</p>
      <p>Trays: {trays.split(" ")[0]} and {trays.split(" ")[1]}</p>
      <p>Run Created: {Date(createdAt)}</p>
      <p>Assay Type: {assay}</p>
      <p>Comments: {comments}</p>
      
      <br />
      
      
      <br />
    </div>
  ));
}
function Runs(){
    return(
    <DisplayRuns />
    )
}

export default Runs