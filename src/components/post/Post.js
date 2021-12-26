import React from "react";
import "./post.css";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  //console.log(post);
  // const user = Users.filter(u=>(
  //   u.id===1
  // ));

  // console.log(user[0].username);

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((user)=> user.id===post?.userId)[0].profilePicture}
              alt="profile img"
            />
            <span className="postUsername">{Users.filter((user)=>user.id===post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
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
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="post img" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="../../assets/like.png"
              alt="like icon"
            />
            <img
              className="heartIcon"
              src="../../assets/heart.png "
              alt="heart icon"
            />
            <span className="postLikeCounter">{post.likes} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
