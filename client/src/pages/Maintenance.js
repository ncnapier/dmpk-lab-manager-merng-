import React from 'react'
import AddMaintReq from '../components/NewMaintReq'
import MaintReqs from '../components/MaintReqs';
import { GridColumn } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";




function Maintenance(){

    const GET_MAINTREQS = gql`
    query {
        getMaintReqs {
      id
      body
      username
      createdAt
      instrument
      color
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
            <MaintReqs maintReq={maintReq} color={maintReq.color} />
                </GridColumn>
            ))
            )}
        </div>
    )
}

export default Maintenance;