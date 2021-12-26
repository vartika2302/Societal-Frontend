import React from "react";
import "./sidebar.css";
import {Users} from '../../dummyData';
import CloseFriend from "../closeFriend/CloseFriend";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebarContainer">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/640/premium/640576.png?token=exp=1640452890~hmac=aff2fc0a0069dfce93bcc90e49c8403b"
                alt="Feed icon"
              />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/2769/premium/2769104.png?token=exp=1640517785~hmac=a132db5cdf2716cfd487499e5b1b7b8b"
                alt="Chats icon"
              />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/527/premium/527995.png?token=exp=1640517812~hmac=cec4edcee428dfc5b87c289a7a7eeaa5"
                alt="Videos icon"
              />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/681/681494.png"
                alt="Groups icon"
              />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/102/102279.png"
                alt="Bookmarks icon"
              />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/471/premium/471715.png?token=exp=1640517890~hmac=80a799f9dd988e46e1d770d81033c134"
                alt="Questions icon"
              />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/2910/2910791.png"
                alt="Jobs icon"
              />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons-png.flaticon.com/128/48/48732.png"
                alt="Events icon"
              />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarListIcon"
                src="https://cdn-icons.flaticon.com/png/128/3044/premium/3044245.png?token=exp=1640517943~hmac=9dc58580d87f8ef474784ab0676a3fe3"
                alt="Courses icon"
              />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show</button>
          <hr className="sidebarHr"></hr>
          <ul className="sidebarFriendList">
          {Users.map(user=>(
            <CloseFriend key={user.id} user={user}/>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
