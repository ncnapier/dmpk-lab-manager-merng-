import React from "react";
import { Grid, GridRow, GridColumn, Image } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import gql from 'graphql-tag'
import PostCard from '../components/PostCard';
import AddPost from '../components/NewPost'
import WeatherAPI from '../components/WeatherAPI'
import LogoutButton from "../components/LogOut";


function Home(){

    const GET_POSTS = gql`
    query {
        getPosts {
      id
      body
      username
      createdAt
      commentCount
      color
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


   //accuweather API
fetch("https://dataservice.accuweather.com/currentconditions/v1/335668?apikey=WlJdqhjA4jTuM6FQA5uH1Rr7GoyHhKYY&language=en-us&details=true")
.then(res => res.json()) // parse response as JSON
.then(data => {
    console.log(data)
  console.log(data[0].ApparentTemperature.Metric.Value)
  console.log(data[0].WeatherIcon)
  let icon = data[0].WeatherIcon
  if(icon <= 4){
    document.getElementById('icon').style.backgroundColor = "#fff44f"
  }else if(icon <= 11){
    document.getElementById('icon').style.backgroundColor = "#dcdcdc"
  }else if(icon <= 18){
    document.getElementById('icon').style.backgroundColor = "#bcd4e6"
    document.getElementById('icon').style.borderRadius = "0px 50% 50% 50%"
    
  }else if(icon <= 29){
    document.getElementById('icon').style.backgroundColor = "white"
    document.getElementById('icon').style.border = "1px black solid"
  }else if(icon <= 34){
    document.getElementById('icon').style.backgroundColor = "black"
    document.getElementById('icon').style.border = "1px black solid"
  }else if(icon <= 38){
    document.getElementById('icon').style.backgroundColor = "#dcdcdc"
    document.getElementById('icon').style.border = "4px black solid"
  }else if(icon <= 42){
    document.getElementById('icon').style.backgroundColor = "#bcd4e6"
    document.getElementById('icon').style.border = "4px black solid"
    document.getElementById('icon').style.borderRadius = "0px 50% 50% 50%"
  }else if(icon <= 44){
    document.getElementById('icon').style.backgroundColor = "white"
    document.getElementById('icon').style.border = "4px black solid"

  }

  document.querySelector("h4").innerText = `${data[0].WeatherText} and ${data[0].Temperature.Imperial.Value} F (${data[0].Temperature.Metric.Value} C)`
})
.catch(err => {
    console.log(`error ${err}`)
});




    return (
        <div >
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <h1 style={{width: '50%'}}>DMPK Lab Home</h1>
            <WeatherAPI />
      </div>
    <div id="root"></div>

            <Grid columns={1} >
        <GridRow className="page-title">
           
            
            
        </GridRow>
        <h2>Recent Posts</h2>
        <GridRow style={{ maxHeight: '400px', overflowY: 'auto', boxShadow: '10px gray', border: '1px gray solid', overflowX: 'hidden'}}>
    <Grid style={{display: 'flex', justifyContent: 'center'}}>
        
      {loading ? (
          <h1>Loading Posts...</h1>
      ) : (
       
          data.getPosts && data.getPosts.map(post=> (
              <GridColumn key={post.id} width={10} style={{marginBottom: '20px', alignSelf: 'center'}}>
                  <PostCard post={post} color={post.color} />
              </GridColumn>
          ))
          
      )}
      
    </Grid>
    </GridRow>
     <AddPost />
     
    </Grid>
    <LogoutButton />


        </div>
    )
}
<script src='./Weather.js'></script>
export default Home;