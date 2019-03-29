import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Ren from './render.js';


import './post.css';
//component for display
const Reuse = (props) => {

    return (

        <div className="card">
				<Link to={'/comments/'+props.details.id}>
					<ul className="disnone">
						<li><h5>{props.details.title}</h5></li>
						<li>{props.details.body}</li>
					</ul>
				</Link>
                <button onClick={()=>props.del(props.details.id)}>delete</button>

				<button title={props.details.title} body={props.details.body}>
                	<Link to={'/update/'+props.details.id}>update
                	</Link>
                </button>
        </div>
    )
}
export default Reuse;