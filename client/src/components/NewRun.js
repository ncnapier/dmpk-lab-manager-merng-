// import React, { useState } from 'react';
// import { useMutation, gql } from '@apollo/client';

// const CREATE_RUN = gql`
//   mutation CreateRun($id: ID!, $instrument: String!, $assay: String!, $trays: String!, $createdAt: String!, $username: String!, $authHeader: authHeader) {
//     createRun(id: $id, instrument: $instrument, assay: $assay, trays: $trays,createdAt: $createdAt, username: $username, authHeader: $authHeader) {
//       id
//       instrument
//       assay
//       trays
//       createdAt
//       username
//       authHeader

//     }
//   }
// `;

// // const AddRun = () => {
// //   const [formData, setFormData] = useState({
// //     instrument: '',
// //     assay: '',
// //     trays: '',
// //     id: '',
// //     username: '',
// //     createdAt:'' ,
// //     // authHeader: ''

// //   });

// //   const [createRun] = useMutation(CREATE_RUN);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const authHeader = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzkwOWJkNzJmNWNkNzQzYTY3MjkwNSIsImVtYWlsIjoibmV3ZXN0QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidXNlciIsImlhdCI6MTcwOTMwNzc4MSwiZXhwIjoxNzA5MzExMzgxfQ.wpC1ZnqiXPlnseYlDAsvlnBZLocSHbve33TNzDudRkY"; // Manually provide your auth authHeader here
// //       await createRun({ variables: { ...formData, authHeader } });
// //       console.log('Run created successfully');
// //     } catch (error) {
// //       console.error('Error creating run:', error);
// //     }
// //   };

// const AddRun = () => {
//   const [createRun] = useMutation(CREATE_RUN);
//   const [formData, setFormData] = useState({
//         instrument: '',
//         assay: '',
//         trays: '',
//         id: '',
//         username: '',
//         createdAt:'' ,
//         authHeader: ''

//       });

//   // const handleSubmit = async () => {
//   //   try {
//   //     await createRun({
//   //       variables: {
//   //         id: 'your-id-value',
//   //         instrument: 'your-instrument-value',
//   //         assay: 'your-assay-value',
//   //         trays: 'your-trays-value',
//   //         createdAt: 'your-createdAt-value',
//   //         username: 'your-username-value',
//   //       },
//   //     });
//   //     console.log('Run created successfully');
//   //   } catch (error) {
//   //     console.error('Error creating run:', error);
//   //   }
//   // };

//   const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const authHeader = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzkwOWJkNzJmNWNkNzQzYTY3MjkwNSIsImVtYWlsIjoibmV3ZXN0QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidXNlciIsImlhdCI6MTcwOTMxNTI4MSwiZXhwIjoxNzA5MzE4ODgxfQ.8PrwufeieNiXWKCwqbEFypX3ER57U7UjpWXvhWRe3JI"; // Manually provide your auth authHeader here
//           await createRun({ variables: { ...formData, authHeader } });
//           console.log('Run created successfully');
//         } catch (error) {
//           console.error('Error creating run:', error);
//         }
//       };


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Instrument:
//           <input type="text" name="instrument" value={formData.instrument} onChange={handleChange} />
//         </label>
//         <label>
//           Assay:
//           <input type="text" name="assay" value={formData.assay} onChange={handleChange} />
//         </label>
//         <label>
//           Trays:
//           <input type="text" name="trays" value={formData.trays} onChange={handleChange} />
//         </label>
//         <label>
//           ID:
//           <input type="text" name="id" value={formData.id} onChange={handleChange} />
//         </label>
//         <label>
//           username:
//           <input type="text" name="username" value={formData.username} onChange={handleChange} />
//         </label>
//         <label>
//           createdAt:
//           <input type="text" name="createdAt" value={formData.createdAt} onChange={handleChange} />
//         </label>

//         <button type="submit">Create Run</button>
//       </form>
//     </div>
//   );
// };

// export default AddRun;

import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';






const CREATE_RUN = gql`
  mutation createRun( $instrument: String!, $assay: String!, $trays: String!) {
    createRun(instrument: $instrument, assay: $assay, trays: $trays) {
      
      instrument
      assay
      trays
      
     
      
    }
  }
`;




const AddRun = () => {
  const [createRun] = useMutation(CREATE_RUN);
  const [formData, setFormData] = useState({
    instrument: '',
    assay: '',
    trays: '',
    

  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name)
    console.log(e.target.value)
    console.log(formData)
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       // Manually provide your auth authHeader here
     
      await createRun({ variables: { ...formData } });
      
      console.log('Run created successfully');
    } catch (error) {
      console.error('Error creating run:', error);
      console.log({...formData});
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Instrument:
          <input type="text" name="instrument" value={formData.instrument} onChange={handleChange} />
        </label>
        <label>
          Assay:
          <input type="text" name="assay" value={formData.assay} onChange={handleChange} />
        </label>
        <label>
          Trays:
          <input type="text" name="trays" value={formData.trays} onChange={handleChange} />
        </label>


        <button type="submit">Create Run</button>
      </form>
    </div>
  
  );
};

export default AddRun;