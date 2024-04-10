import reportWebVitals from './reportWebVitals';
import React from 'react';
import  ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';
import { AuthProvider } from '../src/context/AuthContext';

const client = new ApolloClient({
    uri: 'https://dmpk-lab-manager-merng.onrender.com',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
    {
       getRuns {
        id
        instrument
        trays
        assay
        username
        comments {
            id
        }
        createdAt
        }
    }
    `,
    })
    .then((result) => console.log(result));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ApolloProvider client={client}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);


reportWebVitals();
