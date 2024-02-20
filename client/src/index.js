
import reportWebVitals from './reportWebVitals';

import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';



const client = new ApolloClient({
    uri: 'http://localhost:8000/',
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


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ApolloProvider></ApolloProvider>
//   </React.StrictMode>
// );

// ReactDOM.render(ApolloProvider, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
