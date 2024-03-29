

import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import DisplayRunsByInstrument from './DisplayRunsByInstrument';
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




const CREATE_RUN = gql`
  mutation createRun( $instrument: String!, $assay: String!, $trays: String!, $username: String!) {
    createRun(instrument: $instrument, assay: $assay, trays: $trays, username: $username) {
      
      instrument
      assay
      trays
      username
      
      
     
      
    }
  }
`;

const options = [
  { key: 'p', text: 'PPB-BHB', value: 'PPB-BHB' },
  { key: '4', text: 'P450', value: 'P450' },
  { key: 'c', text: 'CLint', value: 'CLint' },
  { key: 'o', text: 'Other', value: 'other' },
]


const AddRun = () => {
  const [createRun] = useMutation(CREATE_RUN);
  const [formData, setFormData] = useState({
    instrument: '',
    assay: '',
    trays: '',


  });
  const [runData, setRunData] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    console.log(storedUsername);
    if (storedUsername){
      setUsername(storedUsername);
      console.log(setUsername);
    }
  }, []);

  const handleChange = (_, { value }) => {
    setFormData({ ...formData, instrument: value });

  };

  const handleAssayChange = (_, { value }) => {
    setFormData({ ...formData, assay: value });
  };

  const handleCheckboxChange = (_, { label }) => {
    const { trays } = formData;
    let updatedTrays;
  
    // Check if the clicked tray is already selected
    const selectedTrays = trays.split(',');
  
    if (selectedTrays.includes(label)) {
      // If the tray is already selected, remove it
      updatedTrays = selectedTrays.filter(tray => tray !== label).join(',');
    } else {
      // Otherwise, add it to the selected trays
      updatedTrays = trays ? `${trays},${label}` : label;
    }
  
    // Update the state with the updated trays
    setFormData({ ...formData, trays: updatedTrays });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');

    try {
      const variables = { ...formData, username };
      const { data } = await createRun({ variables, context:{
        headers: {
            Authorization: token? `Bearer ${token}` : '',
        },
    }, });
      setRunData(data.createRun);
      console.log('Run created successfully');
      setFormData({instrument: '', assay: '', trays: ''})
      window.location.reload();
    } catch (error) {
      console.error('Error creating run:', error);
      console.log({ ...formData, username });
    }
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup inline >


          <label>Instrument</label>
          <FormRadio
            label='Old 4500'
            value={'old4500'}
            checked={formData.instrument === 'old4500'}
            onChange={handleChange}

          />
          <FormRadio
            label='New 4500'
            value='new4500'
            checked={formData.instrument === 'new4500'}
            onChange={handleChange}
          />
          <FormRadio
            label='5500'
            value='5500'
            checked={formData.instrument === '5500'}
            onChange={handleChange}
          />
          <FormRadio
            label='6500'
            value='6500'
            checked={formData.instrument === '6500'}
            onChange={handleChange}
          />


        </FormGroup>

        <FormSelect
          width={2}
          fluid
          label='Assay'
          options={options}
          placeholder='Select Assay'
          onChange={handleAssayChange}
        />


        <Form.Group inline>
          <label>Trays Used:</label>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
            <FormCheckbox
              key={num}
              label={num.toString()}

              
              onChange={handleCheckboxChange}
            />
            
          ))}
        </Form.Group>



        <FormButton type="submit">Create Run</FormButton>
      </Form>
      
    </div>

  );
};

export default AddRun;