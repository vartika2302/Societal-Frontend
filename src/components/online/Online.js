import React from "react";
import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt="friend img"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
