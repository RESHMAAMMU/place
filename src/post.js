import React from 'react';
import axios from 'axios';

import './post.css';

import Reuse from './reuse.js';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: []
        };
    }
//life cyclemethod for full post view
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(hit => {
                this.setState({ value: hit.data });
            })
            .catch(error => console.log("error", error))
    }

//my post view 
    myidview = () => {
            //fech api using axios
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=9')
            .then(hit => {

                this.setState({ value: hit.data });
            })
            .catch(error => console.log("error", error))

    }
    //post delete

    deletepost=(id)=>
{
     axios.get('https://jsonplaceholder.typicode.com/posts?userId=9')
            .then(hit => {
            this.setState({ value: hit.data });
            //store an array to variable
            var array = this.state.value;
            

            //var index = array.indexOf(array)
            //alert(index);

            //if (index !== -1) {
         //array.splice(index, 1);
        //this.setState({value: array});
  
            })
            .catch(error => console.log("error", error))

    
} 

    render() {
        return (
            <div>
        {/* button  create for mypost*/}
                <button className="idview" onClick={this.myidview}>My post</button>
            {/* mapping */}
              {this.state.value.map(value1=>
                <Reuse details={value1} del={this.deletepost} />
           ) }
            
            
            </div>

        );

    }
}
export default Post;