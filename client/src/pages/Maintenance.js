import React from 'react'

import AddRun from '../components/NewRun';
import Runs from '../components/Runs';
import AddRunForm from '../components/NewRun';
import AddMaintReq from '../components/NewMaintReq'
import MaintReqs from '../components/MaintReqs';
import { GridColumn } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";




function Maintenance(){

    const GET_MAINTREQS = gql`
    query {
        getMaintReqs {
      id
      body
      username
      createdAt
      instrument
      
     
      comments {
        id
        createdAt
        body
      }
        }
    }
  `;

  const { loading, error, data } = useQuery(GET_MAINTREQS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h1>Maintenance Page</h1>
           
            <AddMaintReq />
            <h3>Current Requests:</h3>
            {loading ? (
                <h1>Loading Requests...</h1>
            ): (
            data.getMaintReqs && data.getMaintReqs.map(maintReq=> (
                <GridColumn key={maintReq.id} width={10} style={{marginBottom: '20px', alignSelf: 'center'}}>
            <MaintReqs maintReq={maintReq}/>
                </GridColumn>
            ))
            )}
        </div>
    )
}

export default Maintenance;