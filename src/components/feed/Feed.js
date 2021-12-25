import React from "react";
import Share from '../share/Share';
import Post from '../post/Post';
import "./feed.css";

class Feed extends React.Component {
  render() {
    return (
      <div className="feedContainer">
        <div className="feedWrapper">
<Share/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
        </div>
      </div>
    );
  }
}

export default Feed;
