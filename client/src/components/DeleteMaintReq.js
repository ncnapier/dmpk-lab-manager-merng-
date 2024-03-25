import React from 'react';
import { useMutation, gql } from '@apollo/client';






const DELETE_MAINTREQ = gql`
  mutation deleteMaintReq( $maintReqId: ID! ) {
    deleteMaintReq( maintReqId: $maintReqId )
  }
`;
const token = localStorage.getItem('authToken');
const DeleteMaintReq = ({ maintReqId }) => {
    const [deleteMaintReqMutation] = useMutation(DELETE_MAINTREQ);
    
    const handleDelete = async () => {
      try {
        
        await deleteMaintReqMutation({ variables: { maintReqId }, context:{
            headers: {
                Authorization: token? `Bearer ${token}` : '',
            },
        },  });
        
        console.log('Request deleted successfully');
        window.location.reload();
      } catch (error) {
        alert(error)
        console.log(error)
        console.error('Error deleting post:', error);
        
      }
    };
  
    return (
      <button 
       style={{
        color: 'white',
        backgroundColor: 'red',
        borderColor: 'red'
    }} onClick={handleDelete}>Delete Request</button>
    );
  };
 
  export default DeleteMaintReq;