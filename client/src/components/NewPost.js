import React, { useState, useEffect, useContext } from 'react';
import { useMutation, gql } from '@apollo/client';
import {
  FormTextArea,
  FormButton,
  Form,
} from 'semantic-ui-react';

const CREATE_POST = gql`
  mutation createPost( $body: String!, $color: String!, $username: String!) {
    createPost(body: $body, color: $color, username: $username) {
        id
        body
        createdAt
        username
        likeCount
        commentCount
        color
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
    color: '',
  });
const [setPostData] =useState(null);
const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedColor = localStorage.getItem('color');
   
    setUsername(storedUsername);
    setFormData(prevData => ({...prevData, color: storedColor }));
    
    
    
  }, []);

  const handleChange = (_, { value }) => {
    setFormData({...formData,  body: value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');
    
    try {
        const variables = { ...formData, username};
      const { data } = await createPost({ variables, 
                            context:{
                                headers: {
                                    Authorization: token? `Bearer ${token}` : '',
                                },
                            },
                         });
                                          
      console.log('Post created successfully');
      setFormData({ body: '', color: '' });
      window.location.reload();
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