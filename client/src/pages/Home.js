import React from "react";
// import { useQuery } from "@apollo/react-hooks";

// import { gql } from "@apollo/client";
import { Grid, GridRow, GridColumn, Image } from "semantic-ui-react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from "@apollo/client";
// import { FETCH_POSTS_QUERY } from "../util/graphql";
import gql from 'graphql-tag'
import PostCard from '../components/PostCard';
import AddPost from '../components/NewPost'

function Home(){

    const GET_POSTS = gql`
    query {
        getPosts {
      id
      body
      username
      createdAt
      commentCount
      likeCount
      likes {
        username
        id
        createdAt
      }
      comments {
        id
        createdAt
        body
      }
        }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


    return (
        <div>
            <h1>DMPK Lab Home</h1>
           

            <Grid columns={1} >
        <GridRow className="page-title">
            <AddPost />
            
            <h1>Recent Posts</h1>
        </GridRow>
    <GridRow>
      {loading ? (
          <h1>Loading Posts...</h1>
      ) : (
          data.getPosts && data.getPosts.map(post=> (
              <GridColumn key={post.id} width={10} style={{marginBottom: '20px'}}>
                  <PostCard post={post} />
              </GridColumn>
          ))
      )}
    </GridRow>
    </Grid>



        </div>
    )
}

export default Home;