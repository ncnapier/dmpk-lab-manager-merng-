

import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import DeleteMaintReq from './DeleteMaintReq';

function MaintReqs({ maintReq: { createdAt, username, id, body, instrument, color}}){
    console.log('Color', color)
    console.log('body', body)
    console.log('createdAt', createdAt)
    
    function commentOnMaintReq(){
        console.log('comment on post');
    }

    function fixInstrument(instrument){
        let instrumentName = ''
            if(instrument === 'old4500'){
                instrumentName = 'Old 4500'
            } else if(instrument === 'new4500'){
                instrumentName = 'New 4500'
            }
            else if(instrument === 'old4500lc'){
                instrumentName = 'Old 4500 LC'
            }else if(instrument === 'new4500lc'){
                instrumentName = 'New 4500 LC'
            }
            else if(instrument === '5500lc'){
                instrumentName = '5500 LC'
            }else if(instrument === '6500lc'){
                instrumentName = '6500 LC'
            }else{
                instrumentName = instrument
            }
          return instrumentName  
    }

    return (
        <Card fluid>
            
        <Card.Content>
           <div floated= 'right' style={{ width: '50px', height: '50px', backgroundColor: color, float: 'right' }}></div>
          <Card.Header>{fixInstrument(instrument)}</Card.Header>
          <Card.Meta as={Link} to={`/maintReq/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
          <Card.Header>{username}:</Card.Header>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        
        <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={commentOnMaintReq}>
      <Button color='blue' basic>
        <Icon name='comments' />
        
      </Button>
      
    </Button>
    <DeleteMaintReq maintReqId = {String(id)}/>
        </Card.Content>
      </Card>
    )
}

export default MaintReqs;