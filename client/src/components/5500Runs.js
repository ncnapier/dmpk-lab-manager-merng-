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
function DisplayRuns5500() {
    const { loading, error, data } = useQuery(GET_RUNS);
    const options = {
        weekday: 'long', // full day of the week
        year: 'numeric', // full year
        month: 'long', // full month name
        day: 'numeric', // day of the month
        hour: 'numeric', // 12-hour format
        minute: 'numeric', // minutes
        second: 'numeric', // seconds
        hour12: true, // use 12-hour format
      };


    let fiftyFive = []
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    for (let i = 0; i < data.getRuns.length; i++) {
        if (data.getRuns[i].instrument === '5500') {
            fiftyFive.push(data.getRuns[i])
            console.log(fiftyFive)
        }
    }
            return fiftyFive.map(({ id, instrument, username, trays, assay, createdAt, comments }) => (
                <div key={id}>
                    
                    <p>User: {username}</p>
                    <p>Trays: {trays.split(" ")[0]}  {trays.split(" ")[1]} {trays.split(" ")[2]}</p>
                    <p>Run Created: {new Date(createdAt).toLocaleString()}</p>
                  
                    <p>Assay Type: {assay}</p>
                    <p>Comments: {comments}</p>
                    <p>ID: {id}</p>
                    <DeleteRun runId = {String(id)}/>
                    <br />


                    <br />
                </div>
            ));
        }
function fiftyFiveHundredRuns(){
    return(
        <><div>
            <h3>5500 Runs:</h3><br />
        </div><DisplayRuns5500 /></>
    )
}

export default fiftyFiveHundredRuns