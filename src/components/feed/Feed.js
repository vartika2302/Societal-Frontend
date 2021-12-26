import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { Posts } from "../../dummyData.js";

class Feed extends React.Component {
  render() {
    return (
      <div className="feedContainer">
        <div className="feedWrapper">
          <Share />
          {Posts.map(post=>(
            <Post key={post.id} post={post}/>
          ))}
          
        </div>
      </div>
    );
  }
}

export default Feed;
