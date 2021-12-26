import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">Societal</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <img
              className="searchIcon"
              src="https://cdn-icons.flaticon.com/png/128/2811/premium/2811790.png?token=exp=1640442045~hmac=3b038d2677a803599f11cc55bef3918e"
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
                src="https://cdn-icons.flaticon.com/png/128/3106/premium/3106773.png?token=exp=1640442908~hmac=ebb50cd7bdb27f8f0a8e487f877b09ec"
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
          <div className="topbarProfileImg">
            <img src="../../assets/profiles/profile-1.jpg" alt="demo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
