import React from 'react';
import { useMutation, gql } from '@apollo/client';






const DELETE_RUN = gql`
  mutation deleteRun( $runId: ID! ) {
    deleteRun( runId: $runId )
  }
`;

const DeleteRun = ({ runId }) => {
    const [deleteRunMutation] = useMutation(DELETE_RUN);
  
    const handleDelete = async () => {
      try {
        
        await deleteRunMutation({ variables: { runId } });
        console.log('Run deleted successfully');
        window.location.reload();
      } catch (error) {
        
        
        console.error('Error deleting run:', error);
      }
    };
  
    return (
      <button 
       style={{
        color: 'white',
        backgroundColor: 'red',
        borderColor: 'red'
    }} onClick={handleDelete}>Delete Run</button>
    );
  };
 
  export default DeleteRun;