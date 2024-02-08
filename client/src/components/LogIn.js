import React from 'react'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

const LogIn = () => (
  <Form>
    <FormField width={5}>
      <label>User Name</label>
      <input placeholder='User Name' />
    </FormField>
    <FormField width={5}>
      <label>Password</label>
      <input type='password' placeholder='*******' />
    </FormField>
    
    <Button type='submit'>Login</Button>
  </Form>
)

export default LogIn