import React from "react";
import "./share.css";

class Share extends React.Component {
  render() {
    return (
      <div className="shareContainer">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              className="shareProfileImg"
              src="../../assets/profiles/profile-1.jpg"
              alt="share profile"
            />
            <input
              placeholder="What's in your mind Goergina?"
              type="text"
              className="shareInput"
            />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <img
                  className="shareIcon"
                  src="https://cdn-icons-png.flaticon.com/128/64/64583.png"
                  alt="media icon"
                />
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <img
                  className="shareIcon"
                  src="https://cdn-icons-png.flaticon.com/128/4305/4305619.png"
                  alt="media icon"
                />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <img
                  className="shareIcon"
                  src="https://cdn-icons.flaticon.com/png/128/186/premium/186250.png?token=exp=1640462284~hmac=9acf3d09965463be4fe0ea5c8341e3d8"
                  alt="media icon"
                />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <img
                  className="shareIcon"
                  src="https://cdn-icons-png.flaticon.com/512/1023/1023707.png"
                  alt="media icon"
                />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>

            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Share;
