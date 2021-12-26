import React from "react";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <div className="closeFriendContainer">
        <img
          className="sidebarFriendImg"
          src={PF+user.profilePicture}
          alt="sidebar friend img"
        />
      </div>
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
