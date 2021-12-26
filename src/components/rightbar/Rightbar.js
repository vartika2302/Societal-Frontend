import React from "react";
import "./rightbar.css";
import {Users} from '../../dummyData.js';
import Online from '../online/Online';

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
            {Users.map(user=>(
              <Online key={user.id} user={user}/>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Rightbar;
