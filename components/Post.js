import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div class="ui segment">
      <div className="post">
        <h2>{this.props.post.title}</h2>
        <h3>{this.props.post.message}</h3>
        <button class="ui secondary basic button" onClick={() => 
          this.props.dispatch({ type:'EDIT_POST', id:this.props.post.id })}>
        Edit</button>
        <button class="ui negative basic button" onClick={() => 
          this.props.dispatch({ type:'DELETE_POST', id:this.props.post.id})}>
        Delete</button>
      </div>
    </div>
  );
 }
}
export default connect()(Post);