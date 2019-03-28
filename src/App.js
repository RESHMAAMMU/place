import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Post from './post.js';
import Comments from './comments.js';
import Newpost from './newpost.js';

class App extends Component {
    render() {
        return (
            <Router>

      <div className="place">
      <Link to="/Newpost">Create</Link>
      <Route path="/" exact component={Post}/>
      <Route path="/comments/:id" exact component={Comments}/>
      <Route path="/Newpost" exact component={Newpost}/>


      </div>

      </Router>
        );
    }
}

export default App;