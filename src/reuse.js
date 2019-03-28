import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Ren from './render.js';


import './post.css';

const Reuse=(props)=>{

return(

			
			<div className="card">

				<Link to={'/comments/'+props.details.id}>

                <ul className="disnone">

                	<li><h5>{props.details.title}</h5></li>

                	<li>{props.details.body}</li>

                </ul>

                	</Link>
                	<button onClick={props.del}>delete</button>
                </div>
                
	)


}

export default Reuse;