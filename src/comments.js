import React from 'react';

import axios from 'axios';
import './post.css';

class Comments extends React.Component

{

    constructor(props) 
    {
        super(props);
        this.state = { cmnt: [] };
    }
    componentDidMount() 
    {

        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.match.params.id)

            .then(hit => {
                this.setState({ cmnt: hit.data });
            })
            .catch(error => console.log("error", error))
    }
    render(){
        return(
				<div className="comments">
						<h2> comments</h2>
						{this.state.cmnt.map(comment=>
							<div className="smallbox"> 
								<h3>{comment.email}</h3>
								<h4>{comment.name}</h4>
								<p>{comment.body}</p>
							</div>)
						}
					</div>	
        		);
    }
}

export default Comments;