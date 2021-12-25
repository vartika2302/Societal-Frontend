import React from "react";
import "./post.css";

class Post extends React.Component {
  render() {
    return (
      <div className="postContainer">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src="../../assets/profiles/profile-1.jpg"
                alt="profile img"
              />
              <span className="postUsername">Goergina Alfonso</span>
              <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <img
                className="dotsImg"
                src="https://cdn-icons.flaticon.com/png/128/4947/premium/4947596.png?token=exp=1640464906~hmac=c3a5fe0acb7096824d53a840050afedc"
                alt="dots img"
              />
            </div>
          </div>
          <div className="postCenter">
              <span className="postText">My first post 😃</span>
              <img className="postImg" src="../../assets/posts/posts-1.jpg" alt="post img"/>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="../../assets/like.png" alt="like icon"/>
                <img className="heartIcon" src="../../assets/heart.png " alt="heart icon"/>
                <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
