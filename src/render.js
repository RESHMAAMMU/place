import React from 'react';
import axios from 'axios';

import Reuse from './reuse.js';


class Ren extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            value: []
        };
    }


    myidview = () => {

        axios.get('https://jsonplaceholder.typicode.com/posts?userId=9')
            .then(hit => {

                this.setState({ value: hit.data });
            })
            .catch(error => console.log("error", error))




    }


    render() {

        return (

            <div >
                 
           
              {this.state.value.map(value1=>
                <Reuse details={value1}/>
           ) }
             
          </div>
        )
    }
}
export default Ren;