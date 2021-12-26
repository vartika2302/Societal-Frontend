import React from "react";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <div className="closeFriendContainer">
        <img
          className="sidebarFriendImg"
          src={user.profilePicture}
          alt="sidebar friend img"
        />
      </div>
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
