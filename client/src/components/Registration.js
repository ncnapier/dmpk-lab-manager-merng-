import React from 'react'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

const Registration = () => (
  <Form>
    <FormField width={5}>
      <label>User Name</label>
      <input placeholder='User Name' />
    </FormField>
    <FormField width={5}>
      <label>Email</label>
      <input placeholder='name@vanderbilt.edu' />
    </FormField>
    <FormField width={5}>
      <label>Password</label>
      <input type='password' placeholder='*******' />
    </FormField>
    <FormField width={5}>
      <label>Confirm Password</label>
      <input type='password' placeholder='*******' />
    </FormField>
   
    <Button type='submit'>Submit</Button>
  </Form>
)

export default Registration