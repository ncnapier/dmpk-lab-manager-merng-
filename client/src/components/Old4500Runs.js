import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'
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

`
function DisplayRunsOld4500() {
    const { loading, error, data } = useQuery(GET_RUNS);
   


    let oldFourtyFive = []
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    for (let i = 0; i < data.getRuns.length; i++) {
        if (data.getRuns[i].instrument === 'old4500') {
            oldFourtyFive.push(data.getRuns[i])
            console.log(oldFourtyFive)
        }
    }
            return oldFourtyFive.map(({ id, instrument, username, trays, assay, createdAt, comments }) => (
                <div key={id}>
                    
                    <p>User: {username}</p>
                    <p>Trays: {trays.split(" ")[0]}  {trays.split(" ")[1]} {trays.split(" ")[2]}</p>

                    <p>Run Created: {createdAt}</p>
                    <p>Assay Type: {assay}</p>
                    <p>Comments: {comments}</p>
                    <DeleteRun runId = {String(id)}/>
                    <br />


                    <br />
                </div>
            ));
        }
function oldFourtyFiveHundredRuns(){
    return(
        <><div>
            <h3>Old 4500 Runs:</h3><br />
        </div><DisplayRunsOld4500 /></>
    )
}

export default oldFourtyFiveHundredRuns