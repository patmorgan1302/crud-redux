import React, { Component } from 'react';
import { connect } from "react-redux";
import Post from './Post';
import EditComponent from './EditComponent';
import '../styles.css';


class AllPost extends Component {
    render() {
        return (
            <div>
                <h1 className="post-list">Post List</h1>
                {this.props.posts.map((post) => (
                        <div class="media-content" key={post.id}>
                            {post.editing ? <EditComponent post={post} key={post.id} /> :
                                <Post class="content" key={post.id} post={post} />}
                        </div>
               
                ))}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(mapStateToProps) (AllPost);