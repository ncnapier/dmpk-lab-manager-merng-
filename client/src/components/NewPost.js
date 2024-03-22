import React, { useState, useEffect, useContext } from 'react';
import { useMutation, gql } from '@apollo/client';


import {
  FormTextArea,
  FormButton,
  Form,
} from 'semantic-ui-react';




const CREATE_POST = gql`
  mutation createPost( $body: String!) {
    createPost(body: $body) {
        id
        body
        createdAt
        username
        likeCount
        commentCount
        likes {
          id
          username
          createdAt
        }
        comments {
          id
          username
          createdAt
          body
        }
      }
    }
  `;




const AddPost = () => {
    const [createPost] = useMutation(CREATE_POST);
    const [formData, setFormData] = useState({
    body: '',
    


  });

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    
    if (storedUsername){
      setFormData({...formData, username: storedUsername});
    }
  }, []);

  const handleChange = (_, { value }) => {
    setFormData({ ...formData, body: value });

  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
       
    // const token = context.user.token;

    const token = localStorage.getItem('authToken');
    console.log(token)
    try {
        
      await createPost({ variables: formData,
                            context:{
                                headers: {
                                    Authorization: token? `Bearer ${token}` : '',
                                },
                            },
                         });
                         
      console.log('Post created successfully');
      setFormData({ body: '' });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


  return (
    <div>
        
      <Form 
      style={{marginTop: '50px'}}
      onSubmit={handleSubmit}>
          <FormTextArea
          
          label='New Post'
          value={formData.body}
          onChange = {handleChange}
        />


        <FormButton type="submit">Post</FormButton>
      </Form>
      
    </div>

  );
};

export default AddPost;