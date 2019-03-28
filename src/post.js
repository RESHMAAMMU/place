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

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(hit => {
                this.setState({ value: hit.data});
            })
            .catch(error=>console.log("error",error))
    }


myidview = () => {

        axios.get('https://jsonplaceholder.typicode.com/posts?userId=9')
            .then(hit => {

                this.setState({ value: hit.data });
            })
            .catch(error => console.log("error", error))

    }

deletepost=()=>{

            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(hit => {

                this.setState({ value: hit.data });
            })
            .catch(error => console.log("error", error))
            const result=value.find()


}


      render()
      {
        return(
                <div>
                <button className="idview" onClick={this.myidview}>My post</button>

              {this.state.value.map(value1=>
                <Reuse details={value1} del={this.deletepost}/>
           ) }
            
            
                      
                </div>



            );

      }
  }
export default Post;