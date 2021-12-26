import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData.js";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  //Inner component
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="../../assets/gift.jpg"
            alt="birthday img"
          />
          <span className="birthdayText">
            <b>Adrian Branco</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img
          className="rightbarAd"
          src="../../assets/ad.jpg"
          alt="rightbar advertisement"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <div className="profileRightbarTitle">User information</div>
        <div className="profileRightBarInfo">
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">City:</span>
            <span className="profileRightBarInfoValue">New York</span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">From:</span>
            <span className="profileRightBarInfoValue">Madrid</span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">Relationship:</span>
            <span className="profileRightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="profileRightbarTitle">User friends</h4>
        <div className="profileRightbarFollowings">
          <div className="profileRightbarFollowing">
            <img
              className="profileRightbarFollowingImg"
              alt="following img"
              src="../../assets/profiles/profile-2.jpg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="profileRightbarFollowing">
            <img
              className="profileRightbarFollowingImg"
              alt="following img"
              src="../../assets/profiles/profile-2.jpg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="profileRightbarFollowing">
            <img
              className="profileRightbarFollowingImg"
              alt="following img"
              src="../../assets/profiles/profile-2.jpg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="profileRightbarFollowing">
            <img
              className="profileRightbarFollowingImg"
              alt="following img"
              src="../../assets/profiles/profile-2.jpg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="profileRightbarFollowing">
            <img
              className="profileRightbarFollowingImg"
              alt="following img"
              src="../../assets/profiles/profile-2.jpg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="profileRightbarFollowing">
            <img
              className="profileRightbarFollowingImg"
              alt="following img"
              src="../../assets/profiles/profile-2.jpg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}
