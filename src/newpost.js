import React from 'react';
import axios from 'axios';

class Newpost extends React.Component{
constructor(props)
	{
		super(props);
		this.state={

		}
	}
	//new post creation
addnewpost=()=> {
	//set the body and title for new post
	var title = this.refs.title.value;
    var body = this.refs.body.value;

    axios.post('https://jsonplaceholder.typicode.com/posts',{
    	 userId:'9',
    	title : title,
    	body : body
    })

	.then(function(response) {
					if(response.status==201)
						alert("created successfully")
                    console.log(response);
                    if (response.data.message) {
                        alert(response.data.message);
                    }
                    if (response.data.errorMsg) {
                        alert(response.data.errorMsg);
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
           }
	render(){

		return(

			<div className="Newpost">
				<h1>Newpost</h1>
				<label>title</label>
				<input type="text" name="" ref="title" placeholder="title" /><br/>
				<br/>
				<textarea ref="body" placeholder="body"rows= "30"px cols="50"px/><br/>
				<button ref="button" onClick={this.addnewpost}>send</button>
		
			</div>
			);
	}
}
export default Newpost;