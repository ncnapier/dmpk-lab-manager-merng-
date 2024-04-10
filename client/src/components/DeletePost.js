import React from 'react';
import { useMutation, gql } from '@apollo/client';


const DELETE_POST = gql`
  mutation deletePost( $postId: ID! ) {
    deletePost( postId: $postId )
  }
`;
const token = localStorage.getItem('authToken');
const DeletePost = ({ postId }) => {
    const [deletePostMutation] = useMutation(DELETE_POST);
    
    const handleDelete = async () => {
      try {
        
        await deletePostMutation({ variables: { postId }, context:{
            headers: {
                Authorization: token? `Bearer ${token}` : '',
            },
        },  });
        
        console.log('Post deleted successfully');
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
        float: 'right',
        color: 'white',
        backgroundColor: 'red',
        borderColor: 'red'
    }} onClick={handleDelete}>Delete Post</button>
    );
  };
 
  export default DeletePost;