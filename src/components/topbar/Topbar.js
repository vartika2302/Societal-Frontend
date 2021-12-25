import React from "react";
import "./topbar.css";

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Societal</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <img
              className="topbarIcon"
              src="https://cdn-icons-png.flaticon.com/128/482/482631.png"
              alt="search-icon"
            />
            <input
              placeholder="Search for friends, posts or videos"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <img
                className="topbarIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
                alt="person icon"
              />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <img
                className="topbarIcon"
                src="https://cdn-icons.flaticon.com/png/128/2076/premium/2076218.png?token=exp=1640430982~hmac=14b488f1d180c0cd74e9f6e00d6cd4e2"
                alt="chat icon"
              />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <img
                className="topbarIcon"
                src="https://cdn-icons.flaticon.com/png/128/2529/premium/2529521.png?token=exp=1640431104~hmac=a4d0e9111a549029f5ec09b798fb900e"
                alt="notification icon"
              />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
            <img
              className="topbarProfileImg"
              src="../../assets/profiles/profile-1.jpg"
              alt="demo"
            />
        </div>
      </div>
    );
  }
}

export default Topbar;
