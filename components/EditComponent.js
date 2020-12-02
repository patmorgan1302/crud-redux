import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import '../styles.css'

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const data = {
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}

render() {
    return (
            <div>
                <Form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
                        <button class="ui secondary basic button">Update</button>
                </Form>
            </div>
        );
    }
}
export default connect()(EditComponent);