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
function DisplayRunsNew4500() {
    const { loading, error, data } = useQuery(GET_RUNS);
   


    let newFourtyFive = []
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    for (let i = 0; i < data.getRuns.length; i++) {
        if (data.getRuns[i].instrument === 'new4500') {
            newFourtyFive.push(data.getRuns[i])
            console.log(newFourtyFive)
        }
    }
            return newFourtyFive.map(({ id, instrument, username, trays, assay, createdAt, comments }) => (
                <div key={id}>
                    
                    <p>User: {username}</p>
                    <p>Trays: {trays.split(" ")[0]} and {trays.split(" ")[1]}</p>

                    <p>Run Created: {createdAt}</p>
                    <p>Assay Type: {assay}</p>
                    <p>Comments: {comments}</p>

                    <br />


                    <br />
                </div>
            ));
        }
function newFourtyFiveHundredRuns(){
    return(
        <><div>
            <h3>New 4500 Runs:</h3><br />
        </div><DisplayRunsNew4500 /></>
    )
}

export default newFourtyFiveHundredRuns