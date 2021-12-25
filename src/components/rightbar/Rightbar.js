import React from "react";
import "./rightbar.css";

class Rightbar extends React.Component {
  render() {
    return (
      <div className="rightbarContainer">
        <div className="rightbarWrapper">
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
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  className="rightbarProfileImg"
                  src="../../assets/profiles/profile-3.jpg"
                  alt="friend img"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Alena Carter</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Rightbar;
