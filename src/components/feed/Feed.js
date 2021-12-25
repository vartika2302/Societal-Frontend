import React from "react";
import Share from '../share/Share';
import "./feed.css";

class Feed extends React.Component {
  render() {
    return (
      <div className="feedContainer">
        <div className="feedWrapper">
<Share/>
        </div>
      </div>
    );
  }
}

export default Feed;
