import React, { useState } from 'react';
import { FormField, Button, Form } from 'semantic-ui-react';

const LogIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the formData to your backend for authentication
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      username: '',
      password: '',
    });
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
    </Form>
  );
};

export default LogIn;