import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';


import {
    FormSelect,
    FormButton,
    FormField,
    Form,
    TextArea
} from 'semantic-ui-react';

const CREATE_MAINTREQ = gql`
  mutation createMaintReq( $body: String!, $username: String!, $instrument: String!, $color: String!) {
    createMaintReq(body: $body, username: $username, instrument: $instrument, color: $color) {
        id
        instrument
        username
        comments {
            id
            username
            createdAt
            body
          }
        createdAt
        body
        color
      }
    }
  `;

  const options = [
    { key: '1', text: 'Old 4500 MS', value: 'old4500' },
    { key: '2', text: 'New 4500 MS', value: 'new4500' },
    { key: '3', text: '5500 MS', value: '5500' },
    { key: '4', text: '6500 MS', value: '6500' },
    { key: '5', text: 'Old 4500 LC', value: 'old4500lc' },
    { key: '6', text: 'New 4500 LC', value: 'new4500lc' },
    { key: '7', text: '5500 LC', value: '5500lc' },
    { key: '8', text: '6500 LC', value: '6500lc' },
  ]

  const AddMaintReq = () => {
    const [createMaintReq] = useMutation(CREATE_MAINTREQ);
    const [formData, setFormData] = useState({
        instrument: '',
        body: '',
    });

    const [maintReqData, setMaintReqData] = useState(null);
    const [username, setUsername] = useState('');
    

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedColor = localStorage.getItem('color');
        
        
        setUsername(storedUsername);
        setFormData(prevData => ({...prevData, color: storedColor }));
        
    }, []);

    const handleChange = (_, { value }) => {
        setFormData({...formData, instrument: value});
    };

    const handleBodyChange = (_, {value}) => {
        setFormData({...formData, body: value});
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
       
      
        const token = localStorage.getItem('authToken');
        try{
            
           const variables = { ...formData, username};
            const { data } = await createMaintReq({ variables, 
                context:{
                    headers: {
                        Authorization: token? `Bearer ${token}` : '',
                    },
                },
            });

            setMaintReqData(data.createMaintReq);

            setFormData({instrument: '', body: ''});
            window.location.reload();
            
        } catch (error) {
            console.error('Error creating run:', error);
            console.log({...formData, username});
        }

    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <FormSelect
          width={4}
          fluid
          label='Instrument'
          options={options}
          placeholder='Select Instrument'
          onChange={handleChange}
          value={formData.instrument}
        />
         <FormField
      control={TextArea}
      label='Maintenance Request:'
      placeholder='Request'
      value={formData.body}
      onChange = {handleBodyChange}
    />
     <FormButton type="submit">Submit Request</FormButton>
            </Form>
        </div>
    )
};

export default AddMaintReq;