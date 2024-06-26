import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const LOGIN = gql`
  mutation login( $username: String!, $password: String!) {
    login(username: $username, password: $password) {
      
      id
      email
      username
      token
      color
    }
  }
`;

const LogIn = () => {
  const [login, {loading, error}] = useMutation(LOGIN);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      //send login mutation
     const { data } = await login({variables: {...formData}}); 
     const {username, color} = data.login;

     const defaultColor = '999999';
     const userColor = color || defaultColor;
     
     console.log('successful login', data.login);
     
     
     localStorage.setItem('authToken', data.login.token)
     localStorage.setItem('username', username);
     localStorage.setItem('color', userColor);
     setFormData({
  username: '',
  password: '',
});
navigate('/', {replace: true});
window.location.reload();
    } catch (err) {
      alert(error)
      console.error('Login error:', err.message);
    }
   
  };

  return (
    
    <Form onSubmit={handleSubmit}>
      <FormField width={5}>
        <label>User Name</label>
        <input
          placeholder="User Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </FormField>
      <FormField width={5}>
        <label>Password</label>
        <input
          type="password"
          placeholder="*******"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormField>

      <Button type="submit">Login</Button>
      <Button href="./register">Register</Button>
    </Form>
  );
};

export default LogIn;