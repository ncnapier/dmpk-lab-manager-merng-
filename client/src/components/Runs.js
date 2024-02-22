import React, { useState, Component } from 'react';
import  {RadialMenu}  from 'react-radial-menu'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'
import SixtyFiveHundredRuns from './6500Runs'
import FiftyFiveHundredRuns from './5500Runs'
import NewFourtyFiveHundredRuns from './New4500Runs'
import OldFourtyFiveHundredRuns from './Old4500Runs'
import { Form } from 'semantic-ui-react';

// const ComponentA = () => <SixtyFiveHundredRuns />


//     const [selectedComponent, setSeletedComponent] = useState(null);

//     const handleSelectComponent = (component) => {
//         setSeletedComponent(component);
//     };




class Runs extends Component {
    state = {}
  
    handleChange = (e, { value }) => this.setState({ value })


    render(){
    const {value} = this.state;
    return (
        
       <div>
        {/* <RadialMenu onSelect={handleSelectComponent}>
            <RadialMenu.Option value={<ComponentA />} />
        </RadialMenu> */}
        <Form>
        <Form.Group inline>
          <label>Instruments</label>
          <Form.Radio
            label='6500'
            value={<SixtyFiveHundredRuns />}
            checked={value == '<SixtyFiveHundredRuns />'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='5500'
            value= {<FiftyFiveHundredRuns />}
            checked={value === <FiftyFiveHundredRuns />}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='New 4500'
            value= {<NewFourtyFiveHundredRuns />}
            checked={value === <NewFourtyFiveHundredRuns />}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Old 4500'
            value= {<OldFourtyFiveHundredRuns />}
            checked={value === '<OldFourtyFiveHundredRuns />'}
            onChange={this.handleChange}
          />
         
         
        </Form.Group>
        </Form>
        <div>
            {value}
        </div>
       </div>
  )
}
}

export default Runs