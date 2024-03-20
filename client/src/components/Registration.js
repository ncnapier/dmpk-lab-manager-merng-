

import React, { useState } from 'react';
import { FormField, Button, Form, Checkbox} from 'semantic-ui-react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const REGISTER =gql`
mutation register($registerInput: RegisterInput) {
  register(registerInput: $registerInput) {
    
   id
   email
   token
   username
   createdAt
    
  }
}
`;

const Registration = () => {
  const [register, {loading, error}] = useMutation(REGISTER)
  const [formData, setFormData]= useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
    const handleSubmit = async(e) => {
      
      e.preventDefault();
      try {
        
       const { data } = await register({variables: {registerInput: formData}}); 
       console.log('mutation response data', data);
       const user = data.register;
       console.log('mutation response data', data);
       console.log('successful registration', user);
       setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
  });
  navigate('/login');
      } catch (err) {
        alert(err.message)
        console.error('registration error:', err.message);
      }
  };

  return(
  <Form onSubmit={handleSubmit}>
    <FormField width={5}>
      <label>User Name</label>
      <input
          placeholder='User Name'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
    </FormField>
    <FormField width={5}>
      <label>Email</label>
      <input
          placeholder='name@vanderbilt.edu'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
    </FormField>
    <FormField width={5}>
      <label>Password</label>
      <input
          type='password'
          placeholder='*******'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
    </FormField>
    <FormField width={5}>
      <label>Confirm Password</label>
      <input
          type='password'
          placeholder='*******'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
    </FormField>
   
    <Button type='submit'>Submit</Button>
    <Button href='./login'
      style={{
        
        marginLeft: '1rem'
      }}
    >Login</Button>
  </Form>
)
 
};
export default Registration;