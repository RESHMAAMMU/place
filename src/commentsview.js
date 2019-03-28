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


      render()
      {
        return(
                <div>

              {this.state.value.map(value1=>
                <Reuse details={value1}/>
           ) }
            <button onClick={this.myidview}>My post</button>
                      
                </div>



            );

      }
  }
export default Post;