import React from 'react';
import axios from 'axios';


class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: ''
        }
    }
    //fetch title body from api and display in the corresponding fields
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)

            .then(hit => {
                this.setState({ update: hit.data });
                this.refs.title.value = this.state.update.title;
                this.refs.body.value = this.state.update.body;
            })
            .catch(error => console.log("error", error))
    }

    //update the values 

    // enter the details for update and alert the succes message 
    update = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id, {

                title: this.refs.title.value,
                body: this.refs.body.value,
                userId: 3
            })
            .then(response => {
                alert("updated successfully");
                if (response.data.message) {
                    alert(response.data.message);
                }
                if (response.data.errorMsg) {
                    alert(response.data.errorMsg);
                }

            })
            .catch(function(error) {
                console.log(error);
            })

    }


    render() {
        return (
            <div className="updatepost">
        {/* field for display & update the valuse*/}
				<h1>updatepost</h1>

				<label>title</label>
				<input type="text" ref="title" placeholder="title"/><br/>
				<br/>
				<textarea ref="body" placeholder="body"rows= "30"px cols="50"px/><br/>
				<button ref="button" onClick={this.update}>update</button>
		
			</div>
        );

    }

}
export default Update;