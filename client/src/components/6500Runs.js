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
function DisplayRuns6500() {
    const { loading, error, data } = useQuery(GET_RUNS);
   console.log(data)


    let sixtyFive = []
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    for (let i = 0; i < data.getRuns.length; i++) {
        if (data.getRuns[i].instrument === '6500') {
            sixtyFive.push(data.getRuns[i])
            console.log(sixtyFive)
        }
       
    }
            return sixtyFive.map(({ id, instrument, username, trays, assay, createdAt, comments }) => (
                <div key={id}>
                    {console.log(username)}
                    <p>User:   {username}</p>
                    <p>Trays: {trays.split(" ")[0]}  {trays.split(" ")[1]} {trays.split(" ")[2]}</p>

                    <p>Run Created: {new Date(createdAt).toLocaleString()}</p>
                    <p>Assay Type: {assay}</p>
                    <p>Comments: {comments}</p>
                    <DeleteRun runId = {String(id)}/>

                    <br />


                    <br />
                </div>
            ));
        }
function SixtyFiveHundredRuns(){
    return(
    <><div>
            <h3>6500 Runs:</h3><br />
        </div><DisplayRuns6500 /></>
    )
}

export default SixtyFiveHundredRuns