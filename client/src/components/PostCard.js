import React from 'react';
import { Card, Icon, Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import DeletePost from './DeletePost';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes, color}}){
    console.log(color)
    console.log(createdAt)
  
  function likePost(){
        console.log('like post');
    }
    function commentOnPost(){
        console.log('comment on post');
    }
    return (
        <Card fluid>
        <Card.Content>
          <div  style={{ width: '50px', height: '50px', backgroundColor: color, float: 'right' }}></div>
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
      <Button color='teal' basic>
        <Icon name='heart' />
        
      </Button>
      <Label  basic color='teal' pointing='left'>
        {likeCount}
      </Label>
    </Button>

        <Button as='div' labelPosition='right' onClick={commentOnPost}>
      <Button color='blue' basic>
        <Icon name='comments' />
        
      </Button>
      <Label  basic color='blue' pointing='left'>
        {commentCount}
      </Label>
    </Button>
    <DeletePost postId = {String(id)}/>
        </Card.Content>
      </Card>
    )
}

export default PostCard;