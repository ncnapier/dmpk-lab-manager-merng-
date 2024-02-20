import React, { Component } from 'react'
import Datetime from 'react-datetime';
import {
  FormTextArea,
  FormSelect,
  FormRadio,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
  FormField,
  Form,
  Container
} from 'semantic-ui-react'


const options = [
  { key: 'p', text: 'PPB-BHB', value: 'ppbbhb' },
  { key: '4', text: 'P450', value: 'p450' },
  { key: 'c', text: 'CLint', value: 'clint' },
  { key: 'o', text: 'Other', value: 'other' },
]

class AddRun extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <Container >
      <Form >
        <FormGroup inline >
          <label>Instrument</label>
          <FormRadio
            label='Old 4500'
            value='o4500'
            checked={value === 'o4500'}
            onChange={this.handleChange}
          />
          <FormRadio
            label='New 4500'
            value='n4500'
            checked={value === 'n4500'}
            onChange={this.handleChange}
          />
          <FormRadio
            label='5500'
            value='5500'
            checked={value === '5500'}
            onChange={this.handleChange}
          />
          <FormRadio
            label='6500'
            value='6500'
            checked={value === '6500'}
            onChange={this.handleChange}
          />
            
          </FormGroup>
          <FormSelect width={2}
                fluid
                label='Assay'
                options={options}
                placeholder='Assay'
            />
        <FormGroup grouped>
      <label>Trays Used:</label>
      <FormGroup inline>
      <FormField label='1' control='input' type='checkbox' />
      <FormField label='3' control='input' type='checkbox' />
      <FormField label='5' control='input' type='checkbox' />
      <FormField label='7' control='input' type='checkbox' />
      <FormField label='9' control='input' type='checkbox' />
      <FormField label='11' control='input' type='checkbox' />
      <FormField label='13' control='input' type='checkbox' />
      </FormGroup>
      <FormGroup inline>
      <FormField label='2' control='input' type='checkbox' />
      <FormField label='4' control='input' type='checkbox' />
      <FormField label='6' control='input' type='checkbox' />
      <FormField label='8' control='input' type='checkbox' />
      <FormField label='10' control='input' type='checkbox' />
      <FormField label='12' control='input' type='checkbox' />
      <FormField label='14' control='input' type='checkbox' />
      </FormGroup>
    </FormGroup>
    
        
        
        <FormTextArea label='Comments' placeholder='Addition notes about this run...' width={5}/>
        <FormCheckbox label='Leave Plates After Run' />
        <FormButton>Submit Run</FormButton>
      </Form>
      </Container>
    )
  }
}

export default AddRun;